from pymongo import MongoClient
from app.api.config import CLIENT_ID, CLIENT_SECRET, MONGOLAB_URI

MONGO_DATABASE_STR = MONGOLAB_URI.split('/')[-1]

client = MongoClient(MONGOLAB_URI)
db = client[MONGO_DATABASE_STR]

STORY = "story"
ADVENTURE = "adventure"
ARTICLE = "article"

"""
  Story
    {
      "title": "Test Story",
      "description": "A test description",
      "image": "",
      "media_link": "https://youtube.com/somevideo",
      "name_of_user": "Sam Smith"
    }
    
  Adventure
    {
      "title": "Run for Fun",
      "category": "Exercise",
      "name_of_place": "Some name",
      "address": "483 Evergreen Street",
      "event_date": "",
      "event_time": "", 
      "description": "Some adventure description.",
      "tags": ["active","running","onyourfeet"],
      "name_of_user": "George Lee"
    }

  Article
    {
      "title": "An article for clinicians",
      "content": "Paragraphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blaphs of content blah blah blah blah",
      "name_of_user": "Teyden Nguyen"
    }
"""

# Data seeds
STORY_SEED = {}
STORY_SEED["title"] = ""
STORY_SEED["description"] = ""
STORY_SEED["image"] = ""
STORY_SEED["media_link"] = ""
STORY_SEED["name_of_user"] = ""

ADVENTURE_SEED = {}
ADVENTURE_SEED["title"] = ""
ADVENTURE_SEED["category"] = ""
ADVENTURE_SEED["name_of_place"] = ""
ADVENTURE_SEED["address"] = ""
ADVENTURE_SEED["event_date"] = ""
ADVENTURE_SEED["event_time"] = ""
ADVENTURE_SEED["description"] = ""
ADVENTURE_SEED["tags"] = []
ADVENTURE_SEED["name_of_user"] = ""

ARTICLE_SEED = {}
ARTICLE_SEED["title"] = ""
ARTICLE_SEED["content"] = ""
ARTICLE_SEED["name_of_user"] = ""