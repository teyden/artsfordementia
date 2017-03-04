from flask import Blueprint

from flask import session as login_session
import random, string

from flask import render_template, url_for, flash
from flask import make_response, request, redirect, jsonify

# Import model
# from app.api.model import Users, Stories, Adventures, Articles

api = Blueprint('api', __name__, url_prefix='/')

@api.route("/")
def index():
  return render_template('index.html')

# Routes to static assets
@app.route('/<path:path>')
def send_js(path):
  return send_from_directory('js', path)

@app.route('/style/<path:path>')
def send_css(path):
  return send_from_directory('css', path)

@app.route('/<path:path>')
def send_images(path):
  return send_from_directory('images', path)

# REST endpoints
@api.route("/api/stories", methods=["GET", "POST"])
def getStories():
  """
  Returns a list of all stories.
  """
  pass

@api.route("/api/adventures", methods=["GET", "POST"])
def getAdventures():
  """
  Returns a list of all adventures.
  """
  pass

@api.route("/api/articles", methods=["GET", "POST"])
def getArticles():
  """
  Returns a list of all articles.
  """
  pass

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