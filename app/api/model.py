from pymongo import MongoClient
from app.api.config import CLIENT_ID, CLIENT_SECRET, MONGOLAB_URI

MONGO_DATABASE_STR = MONGOLAB_URI.split('/')[-1]

client = MongoClient(MONGOLAB_URI)
db = client[MONGO_DATABASE_STR]

TestCollection = db.TestCollection