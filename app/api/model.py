from pymongo import MongoClient
from app.api.config import CLIENT_ID, CLIENT_SECRET, MONGOLAB_URI

MONGO_DATABASE_STR = MONGOLAB_URI.split('/')[-1]

client = MongoClient(MONGOLAB_URI)
db = client[MONGO_DATABASE_STR]

STORY = "story"
ADVENTURE = "adventure"
ARTICLE = "article"

# Data seeds
STORY_SEED = {}
STORY_SEED["title"] = ""
STORY_SEED["description"] = ""
STORY_SEED["image"] = ""
STORY_SEED["media_link"] = ""
STORY_SEED["user_email"] = ""

ADVENTURE_SEED = {}
ADVENTURE_SEED["title"] = ""
ADVENTURE_SEED["category"] = ""
ADVENTURE_SEED["name_of_place"] = ""
ADVENTURE_SEED["address"] = ""
ADVENTURE_SEED["event_date"] = ""
ADVENTURE_SEED["event_time"] = ""
ADVENTURE_SEED["description"] = ""
ADVENTURE_SEED["tags"] = []
ADVENTURE_SEED["user_email"] = ""

ARTICLE_SEED = {}
ARTICLE_SEED["title"] = ""
ARTICLE_SEED["content"] = ""
ARTICLE_SEED["user_email"] = ""