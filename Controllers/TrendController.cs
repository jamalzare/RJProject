using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication
{

    //[Route("api/[controller]")]
    public class TrendController : Controller
    {

        [Route("api/trends/")]
        public JsonResult GetTrends(string companyName)
        {
            var trends = MockData.Trends;
            return Json(trends);
        }

    }
}
