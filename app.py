from flask import Flask

from flask import session as login_session
import random, string

from flask import render_template, url_for, flash
from flask import make_response, request, redirect, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/api/stories", methods=["GET", "POST"])
def getStories():
  """
  Returns a list of all stories.
  """
  pass

@app.route("/api/adventures", methods=["GET", "POST"])
def getAdventures():
  """
  Returns a list of all adventures.
  """
  pass

@app.route("/api/articles", methods=["GET", "POST"])
def getArticles():
  """
  Returns a list of all articles.
  """
  pass

@app.route("/api/stories/<story_id>", methods=["GET"])
def getStory(article_id):
  """
  Returns a single story.
  """
  pass

@app.route("/api/adventures/<adventure_id>", methods=["GET"])
def getAdventure(adventure_id):
  """
  Returns a single adventure.
  """
  pass

@app.route("/api/articles/<article_id>", methods=["GET"])
def getArticle(article_id):
  """
  Returns a single article.
  """
  pass


if __name__ == "__main__":
  app.debug = True
  app.run()