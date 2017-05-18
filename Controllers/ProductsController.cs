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
    public class productsController : Controller
    {


        [Route("api/products/{paramOne}/{paramTwo}")]
        public string Get(string paramOne, int paramTwo)
        {
            return "The [Route] with multiple params worked" + paramOne + paramTwo.ToString();
        }

        [Route("api/products/{companyName}/getProducts")]
        public JsonResult GetCompanyProducts(string companyName)
        {
            var company = MockData.getCompany(companyName);
            var products = MockData.GetCompanyProducts(company.ID);
            return Json(products);
        }
        public JsonResult GetCompanies()
        {
            var list = MockData.Companies;
            return Json(list);
        }

    }
}
