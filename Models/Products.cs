using MongoDB.Bson;
using System;
using MongoDB.Driver;
using MongoDB.Driver.Core;
using System.Collections.Generic;

namespace WebApplication
{
    public class Products
    {
        public int CompanyID { get; set; }
        public string Name { get; set; }
        public Double OldPrice { get; set; }
        public Double NewPrice { get; set; }
        public string ImageUrl { get; set; }
        public string DetailUrl { get; set; }

        public Products(int id, string name, Double oldPrice, Double newPrice, string imageUrl)
        {
            this.CompanyID = id;
            this.Name = name;
            this.OldPrice = oldPrice;
            this.NewPrice = newPrice;
            this.ImageUrl = imageUrl;
            this.DetailUrl = "";
        }
        public Products() { }

    }
}