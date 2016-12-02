using MongoDB.Bson;
using System;
using MongoDB.Driver;
using MongoDB.Driver.Core;
using MongoDB.Driver.Linq;
using System.Collections.Generic;
using MongoDB.Driver.Builders;


namespace WebApplication
{

    public class Dal
    {
        MongoClient client;
        MongoServer server;
        MongoDatabase db;

        public Dal()
        {
            client = new MongoClient("mongodb://localhost:27017");
            server = client.GetServer();
            db = server.GetDatabase("rjproject");
        }


        public IEnumerable<State> GetStates()
        {
            try
            {
                var res = db.GetCollection<State>("States").FindAll();
                return res;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public State GetState(ObjectId id)
        {
            var query = Query<State>.EQ(st => st.Id,id);
            return
             db.GetCollection<State>("States").FindOne(query);
        }

        public String GetStateImages(string id){
            try{
                 var query = Query<State>.EQ(st => st.Id, ObjectId.Parse(id));
                // var res = db.GetCollection<State>("States").
                var collection =  db.GetCollection<State>("States");
               // var items = collection.GetItems<State>("{ x : 3, y : 'abc' }", "{ x : 1 }");
                //var  res =collection.Find(new QueryDocument(BsonDocument.Parse(json)));
                return "";//res.ToJson();
              
            }
            catch(Exception ex){
                return null;
            }
        }

        public State Insert(State model)
        {
            db.GetCollection<State>("States").Save(model);
            return model;
        }
    }
}

