import pymongo
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")

db = client["jwtnode"]
userCollection = db["lists"]

documents = userCollection.find()
for document in documents:
    print(document)


