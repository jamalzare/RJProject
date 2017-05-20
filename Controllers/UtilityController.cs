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
    public class UtitlityController : Controller
    {

        [Route("api/ShowCases")]
        public JsonResult GetTrends(string companyName)
        {
            var trends = MockData.Trends;
            return Json(trends);
        }

        [Route("api/bestdeals")]
        public JsonResult BestDeals()
        {
            var trends = MockData.getRandomList();
            return Json(trends);
        }

         [Route("api/todayDeals")]
        public JsonResult TodayDeals()
        {
            var trends = MockData.getRandomList();
            return Json(trends);
        }


         [Route("api/search")]
        public JsonResult findProducts()
        {
            var trends = MockData.getRandomList();
            return Json(trends);
        }

        [Route("api/trendProducts")]
          public JsonResult getTrendProdcts()
        {
            var products = MockData.getRandomList();
            return Json(products);
        }

    }
}
