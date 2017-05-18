using MongoDB.Bson;
using System;
using MongoDB.Driver;
using MongoDB.Driver.Core;
using System.Collections.Generic;

namespace WebApplication
{
    public class MockData
    {

        public static List<Company> Companies
        {
            get
            {
                var list = new List<Company>();
                list.Add(new Company(1, "arm-alfa", "arm-alfa", 10));
                list.Add(new Company(2, "arm-audi", "arm-audi", 11));
                list.Add(new Company(3, "arm-benz", "arm-benz", 12));
                list.Add(new Company(4, "arm-bmw", "arm-bmw", 13));
                list.Add(new Company(5, "arm-ferar", "arm-ferar", 14));
                list.Add(new Company(6, "arm-fiat", "arm-fiat", 15));
                list.Add(new Company(7, "arm-folo-vag", "arm-folo-vag", 16));
                list.Add(new Company(8, "arm-jagvar", "arm-jagvar", 17));
                list.Add(new Company(9, "arm-mitsu", "arm-mitsu", 18));
                list.Add(new Company(10, "arm-porsh", "arm-porsh", 2));
                list.Add(new Company(11, "arm-reno", "arm-reno", 4));
                list.Add(new Company(12, "arm-rover", "arm-rover", 6));
                list.Add(new Company(13, "arm-sitro", "arm-sitro", 7));
                list.Add(new Company(14, "arm-sizeta", "arm-sizeta", 6));
                list.Add(new Company(15, "arm-toyo", "arm-toyo", 8));
                list.Add(new Company(16, "mercedes", "mercedes", 5));



                return list;
            }
        }

        public static List<Products> CompniesProducts
        {
            get
            {
                var list = new List<Products>();
                list.Add(new Products(1, "4C", 690, 645, "4C"));
                list.Add(new Products(1, "giulietta", 165, 161, "giulietta"));
                list.Add(new Products(1, "mito", 85, 80, "mito"));

                foreach (var itm in list)
                {
                    itm.ImageUrl = "http://localhost:5000/productsImages/" + itm.ImageUrl + ".jpg";
                }

                return list;
            }
        }

        public static List<Trend> Trends
        {
            get
            {
                var list = new List<Trend>();
                list.Add(new Trend("سواری", 1, "savari.jpeg"));
                list.Add(new Trend("لوکس", 1, "lux"));
                list.Add(new Trend("مسابقه", 1, "race"));
                list.Add(new Trend("اسپرت", 1, "sport"));
                list.Add(new Trend("کلاسیک", 1, "classik.jpeg"));
                list.Add(new Trend("باربری", 1, "barbari"));
                list.Add(new Trend("آمریکایی", 1, "american"));
                list.Add(new Trend("ایرانی", 1, "irani.jpeg"));
                list.Add(new Trend("مسافربری", 1, "mosafer.jpeg"));

                foreach (var itm in list)
                {

                    itm.ImageUrl = "http://localhost:5000/productsImages/" + itm.ImageUrl;
                    if (!itm.ImageUrl.Contains(".jpeg"))
                    {
                        itm.ImageUrl = itm.ImageUrl + ".jpg";
                    }
                }

                return list;
            }

        }
        public static Company getCompany(string name)
        {
            var company = new Company();
            foreach (var com in Companies)
            {
                if (com.Name == name)
                {
                    company = com;
                }
            }

            return company;
        }

        public static List<Products> GetCompanyProducts(int companyID)
        {
            var list = new List<Products>();

            foreach (var product in CompniesProducts)
            {
                if (product.CompanyID == companyID)
                {
                    list.Add(product);
                }
            }

            return list;
        }

    }
}