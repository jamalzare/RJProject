using MongoDB.Bson;
using System;
using MongoDB.Driver;
using MongoDB.Driver.Core;
using System.Collections.Generic;

namespace WebApplication
{
    public class State
    {
        public ObjectId Id { get; set; }
        public string Name{get; set;}

        public String OID{
            get{
                return Id.ToString();
            }
        }

        public int StateType{
            get; set;
        }

        public int AdType{get; set;}

        public int RoomCount{get; set;}
        public int ParkingCount{get; set;}

        public int Area{get; set;}

        public int Mortgage{get; set;}

        public int Rent{get; set;}

        public String CallNumber{get; set;}

        public String Mail{get; set;}

        public String Region{get; set;}

        public String Address{get; set;}
        public String BaseImage{get; set;}

        public List<StateImage> ImageList {get; set;}
    }
}