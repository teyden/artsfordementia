from app.api.model import *

def existsInDB(id, type):
  """
  Checks the DB for whether the object already exists, using the external id
  and type.
  """
  isStory = type == STORY and db.StoryCollection.find({'_id': id}).count() > 0
  isAdventure = type == ADVENTURE and db.AdventureCollection.find({'_id': id}).count() > 0
  isArticle = type == ARTICLE and db.ArticleCollection.find({'_id': id}).count() > 0
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

def getJsonSeedFormat(json, type):
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

from pymongo import ReturnDocument

def getNextSequence(name):
  ret = db.counters.find_one_and_update(
    { "_id": name },
    { "$inc": { "seq": 1 } },
    return_document=ReturnDocument.AFTER
  )
  return ret["seq"]

def updateStoryDocument(id, dict):
  return db.StoryCollection.find_one_and_update(
    { "_id": id },
    { "$set": dict },
    return_document=ReturnDocument.AFTER
  )