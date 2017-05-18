using MongoDB.Bson;
using System;
using MongoDB.Driver;
using MongoDB.Driver.Core;
using System.Collections.Generic;

namespace WebApplication
{
    public class Trend
    {

        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public int CollectionID { get; set; }

        public Trend(string name, int collectionID, string imageUrl){
            this.Name = name;
            this.CollectionID = collectionID;
            this.ImageUrl = imageUrl;
        }

    }
}