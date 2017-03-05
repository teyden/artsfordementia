from flask import Blueprint

from flask import session as login_session
import random, string

from datetime import datetime

from flask import render_template, url_for, flash
from flask import make_response, request, redirect, jsonify, send_from_directory

# Import model
from app.api.model import db
from app.api.model import STORY, ADVENTURE, ARTICLE
from app.api.model import STORY_SEED, ADVENTURE_SEED, ARTICLE_SEED

api = Blueprint('api', __name__, url_prefix='')

@api.route("/")
def index():
  return render_template('index.html')

# Routes to static assets
@api.route('/images/<path:path>')
def send_images(path):
  return send_from_directory('images', path)

# Login and signup 


# Helpers
def alreadyExists(object, type):
  """
  Checks the DB for whether the object already exists, using the external id
  and type.
  """
  isStory = type == STORY and db.StoryCollection.find({'id': { "$in": object[id]}}).count() > 0
  isAdventure = type == ADVENTURE and db.AdventureCollection.find({'id': { "$in": object[id]}}).count() > 0
  isArticle = type == ARTICLE and db.ArticleCollection.find({'id': { "$in": object[id]}}).count() > 0
  
  if isStory or isAdventure or isArticle:
    return True
  else:
    return False

def isValidSeed(json, seed):
  for key in seed.keys():
    if key not in json:
      return False 
  return True

def isValidJsonObject(json, type):
  if type == STORY:
    return isValidSeed(json, STORY_SEED)
  elif type == ADVENTURE:
    return isValidSeed(json, ADVENTURE_SEED)
  elif type == ARTICLE:
    return isValidSeed(json, ARTICLE_SEED)
  return False

def getFormattedJson(json, seed):
  outputJson = {}
  for key in seed:
    outputJson[key] = json[key]
  return outputJson 

def makeJsonObjectProperFormat(json, type):
  """
  The json object entered must have all the fields for the associated
  json seed type.
  """
  if type == STORY:
    return getFormattedJson(json, STORY_SEED)
  elif type == ADVENTURE:
    return getFormattedJson(json, ADVENTURE_SEED)
  elif type == ARTICLE:
    return getFormattedJson(json, ARTICLE_SEED)
  else:
    print "Error in formatting json"
    return {}

# REST endpoints
@api.route("/api/stories", methods=["GET", "POST"])
def stories():
  """
  GET - returns a list of all stories.
  POST - creates a story provided as a JSON object

  Example request:
    {
      "title": "Test Story",
      "description": "A test description",
      "image": "",
      "media_link": "https://youtube.com/somevideo",
      "user_email": "afakeemailaddress@gmail.com"
    }
  """
  if request.method == "GET":
    stories = []
    for story in db.StoryCollection.find():
      del story['_id']
      stories += [story]
    return jsonify(stories=stories)

  elif request.method == "POST":
    json = request.get_json()
    if isValidJsonObject(json, STORY):
      storyJson = makeJsonObjectProperFormat(json, STORY)
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

  Example request:
    {
      "title": "Run for Fun",
      "category": "Exercise",
      "name_of_place": "Some name",
      "address": "483 Evergreen Street",
      "event_date": "",
      "event_time": "", 
      "description": "Some adventure description.",
      "tags": ["active","running","onyourfeet"],
      "user_email": "afakeemailaddress@gmail.com"
    }
  """
  if request.method == "GET":
    adventures = []
    for adventure in db.AdventureCollection.find():
      del adventure['_id']
      adventures += [adventure]
    return jsonify(adventures=adventures)

  elif request.method == "POST":
    json = request.get_json()
    if isValidJsonObject(json, ADVENTURE):
      adventureJson = makeJsonObjectProperFormat(json, ADVENTURE)
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

  Example request:
    {
      "title": "An article for clinicians",
      "content": "Paragraphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blah blah blah blah",
      "user_email": "afakeemailaddress@gmail.com"
    }
  """
  if request.method == "GET":
    articles = []
    for article in db.ArticleCollection.find():
      del article['_id']
      articles += [article]
    return jsonify(articles=articles)

  elif request.method == "POST":
    json = request.get_json()
    if isValidJsonObject(json, ARTICLE):
      articleJson = makeJsonObjectProperFormat(json, ARTICLE)
      articleJson['upload_date'] = datetime.today()
      db.ArticleCollection.insert(articleJson)
      return make_response('Article successfully created.', 201)
    return make_response('Error with resource.', 409)
  return make_response('Method not allowed.', 405)
  
@api.route("/api/stories/<story_id>", methods=["GET"])
def getStory(article_id):
  """
  Returns a single story.
  """
  pass

@api.route("/api/adventures/<adventure_id>", methods=["GET"])
def getAdventure(adventure_id):
  """
  Returns a single adventure.
  """
  pass

@api.route("/api/articles/<article_id>", methods=["GET"])
def getArticle(article_id):
  """
  Returns a single article.
  """
  pass

# Upload method that handles two kinds of parameters