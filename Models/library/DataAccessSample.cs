using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using MongoDB.Driver.Builders;


namespace WebApplication
{
    public class Product
    {
        public ObjectId Id { get; set; }
        
        public int ProductId { get; set; }
        
        public string ProductName { get; set; }
        
        public int Price { get; set; }
        
        public string Category { get; set; }
    }
    public class DataAccess
    {
        MongoClient _client;
        MongoServer _server;
        MongoDatabase _db;
 
        public DataAccess()
        {
            _client = new MongoClient("mongodb://localhost:27017");
            _server = _client.GetServer();
            _db = _server.GetDatabase("EmployeeDB");      
        }
 
        public IEnumerable<Product> GetProducts()
        {
            return _db.GetCollection<Product>("Products").FindAll();
        }
 
 
        public Product GetProduct(ObjectId id)
        {
            var res = Query<Product>.EQ(p=>p.Id,id);
            return _db.GetCollection<Product>("Products").FindOne(res);
        }
 
        public Product Create(Product p)
        {
            _db.GetCollection<Product>("Products").Save(p);
            return p;
        }
 
        public void Update(ObjectId id,Product p)
        {
            p.Id = id;
            var res = Query<Product>.EQ(pd => pd.Id,id);
            var operation = Update<Product>.Replace(p);
            _db.GetCollection<Product>("Products").Update(res,operation);
        }
        public void Remove(ObjectId id)
        {
            var res = Query<Product>.EQ(e => e.Id, id);
            var operation = _db.GetCollection<Product>("Products").Remove(res);
        }
    }
}