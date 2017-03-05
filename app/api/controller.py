from flask import Blueprint

from flask import session as login_session
import random, string

from datetime import datetime

from flask import render_template, url_for, flash
from flask import make_response, request, redirect, jsonify, send_from_directory

# Set cross-origin resource sharing
from flask_cors import CORS, cross_origin
from app import app
CORS(app)

# Import model
from app.api.model import db
from app.api.model import STORY, ADVENTURE, ARTICLE
from app.api.model import STORY_SEED, ADVENTURE_SEED, ARTICLE_SEED

api = Blueprint('api', __name__, url_prefix='')

@api.route("/")
def index():
  return render_template('index.html')

from helpers import isValidSeed, isValidJsonObject, getJsonSeedFormat, getNextSequence, existsInDB, updateStoryDocument

# REST endpoints
@api.route("/api/stories", methods=["GET", "POST"])
def stories():
  """
  GET - returns a list of all stories.
  POST - creates a story provided as a JSON object
  """
  if request.method == "GET":
    stories = []
    for story in db.StoryCollection.find():
      stories += [story]
    return jsonify(stories=stories)

  elif request.method == "POST":
    json = request.get_json()
    if '_id' in json:
      return make_response('Do not provide the _id value in the request body. Use PUT /api/stories/<story_id> to update an existing story.', 409)
    if isValidJsonObject(json, STORY):
      storyJson = getJsonSeedFormat(json, STORY)
      storyJson['_id'] = getNextSequence("storyid")
      storyJson['upload_date'] = datetime.today()
      db.StoryCollection.insert(storyJson)
      return make_response('Story successfully created.', 201)
    return make_response('Error with resource.', 409)
  return make_response('Method not allowed.', 405)

@api.route("/api/adventures", methods=["GET", "POST"])
def adventures():
  """
  GET - returns a list of all adventures.
  POST - creates an adventure provided as a JSON object
  """
  if request.method == "GET":
    adventures = []
    for adventure in db.AdventureCollection.find():
      adventures += [adventure]
    return jsonify(adventures=adventures)

  elif request.method == "POST":
    json = request.get_json()
    if isValidJsonObject(json, ADVENTURE):
      adventureJson = getJsonSeedFormat(json, ADVENTURE)
      adventureJson['_id'] = getNextSequence("adventureid")
      adventureJson['upload_date'] = datetime.today()
      db.AdventureCollection.insert(adventureJson)
      return make_response('Adventure successfully created.', 201)
    return make_response('Error with resource.', 409)
  return make_response('Method not allowed.', 405)

@api.route("/api/articles", methods=["GET", "POST"])
def articles():
  """
  GET - returns a list of all articles.
  POST - creates an article provided as a JSON object
  """
  if request.method == "GET":
    articles = []
    for article in db.ArticleCollection.find():
      articles += [article]
    return jsonify(articles=articles)

  elif request.method == "POST":
    json = request.get_json()
    if isValidJsonObject(json, ARTICLE):
      articleJson = getJsonSeedFormat(json, ARTICLE)
      articleJson['_id'] = getNextSequence("articleid")
      articleJson['upload_date'] = datetime.today()
      db.ArticleCollection.insert(articleJson)
      return make_response('Article successfully created.', 201)
    return make_response('Error with resource.', 409)
  return make_response('Method not allowed.', 405)

@api.route("/api/stories/<story_id>", methods=["GET", "PUT"])
def getStory(story_id):
  """
  Returns a single story.
  """
  if request.method == "GET":
    for story in db.StoryCollection.find({"_id": int(story_id)}):
      return jsonify(story)

  elif request.method == "PUT":
    json = request.get_json()
    if '_id' in json:
      return make_response('Do not provide the _id value in the request body. Appending the id to the URI endpoint is sufficient for updating a record.', 409)
    if existsInDB(int(story_id), STORY):
      return jsonify(updateStoryDocument(int(story_id), json))

  return make_response('Not found.', 404)

@api.route("/api/adventures/<adventure_id>", methods=["GET"])
def getAdventure(adventure_id):
  """
  Returns a single adventure.
  """
  if request.method == "GET":
    for adventure in db.AdventureCollection.find({"_id": int(adventure_id)}):
      return jsonify(adventure)
  return make_response('Not found.', 404)

@api.route("/api/articles/<article_id>", methods=["GET"])
def getArticle(article_id):
  """
  Returns a single article.
  """
  if request.method == "GET":
    for article in db.ArticleCollection.find({"_id": int(article_id)}):
      return jsonify(article)
  return make_response('Not found.', 404)

# Uploader
import os, io, logging
from flask import send_file
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

def allowedFile(filename):
  return '.' in filename and \
         filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def getFileType(filename):
  return filename.rsplit('.', 1)[1].lower() 

@api.route('/api/upload/<resource_type>', methods=['GET', 'POST'])
def uploadedFile(resource_type):
  """
  Currently only /api/upload/story is implemented.
  """
  if request.method == 'POST':
    # check if the post request has the file part
    if 'file' not in request.files:
      flash('No file part')
      return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
      flash('No selected file')
      return redirect(request.url)
    if file and allowedFile(file.filename):
      filename = secure_filename(file.filename)
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
      if resource_type == "story":
        image_path = os.path.join('uploads', filename)

        # Check for resource_id first, if None then proceed
        id = getNextSequence("storyid")
        db.StoryCollection.insert(
          {
            '_id': id,
            'image': image_path
          }
        )
        for story in db.StoryCollection.find({'_id': id}):
          story["resource_type"] = "story"
          return jsonify(story)

  # GET is temporary only for testing
  return '''
  <!doctype html>
  <title>Upload new File</title>
  <h1>Upload new File</h1>
  <form method=post enctype=multipart/form-data>
  <input type=text value=hey>
    <p><input type=file name=file>
       <input type=submit value=Upload>
  </form>
  '''

# Routes to static assets
@api.route('/uploads/<path:filename>')
def getImage(filename):
  return send_from_directory(app.config['UPLOAD_FOLDER'], filename)