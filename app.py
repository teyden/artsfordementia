from flask import Flask

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database_setup import User, Story, Adventure, Article

from flask import session as login_session
import random, string

from flask import render_template, url_for, flash
from flask import make_response, request, redirect, jsonify
from oauth2client.client import flow_from_clientsecrets
from oauth2client.client import FlowExchangeError
import httplib2, json, requests 

app = Flask(__name__)

APPLICATION_NAME = "Arts for Dementia"

## Connect to DB and create DB session
engine = create_engine('sqlite:///data/db/afd.db')
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/api/stories", methods=["GET"])
def getStories():
  """
  Returns a list of all stories.
  """
  pass

@app.route("/api/adventures", methods=["GET"])
def getAdventures():
  """
  Returns a list of all adventures.
  """
  pass

@app.route("/api/articles", methods=["GET"])
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