using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
namespace WebApplication
{
    public class carvashController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        public JsonResult GetCompanies()
        {
            var list = MockData.Companies;
            return Json(list);
        }

    }
}
