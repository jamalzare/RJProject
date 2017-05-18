using MongoDB.Bson;
using System;
using MongoDB.Driver;
using MongoDB.Driver.Core;
using System.Collections.Generic;

namespace WebApplication
{
   
    public class Company
    {

        public int ID { get; set; }
        public string Name { get; set; }
        public string ImageName { get; set; }
        public int ProductCount { get; set; }
        public Company(int id, string name, string imageName, int productCount)
        {
            ID = id;
            Name = name;
            ImageName = imageName;
            ProductCount = productCount;
        }

        public Company() { }
    }

}