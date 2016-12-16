using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
namespace WebApplication.Controllers
{

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Index1()
        {
            return View();
        }
        public IActionResult SubmitStateForm(){
            return View();
        }
        public IActionResult SubmitStateForm2(){
            return View();
        }

        public JsonResult GetStates()
        {
            var dal = new Dal();
            return Json(dal.GetStates());
        }
        public IActionResult GoToState(){
            return View();
        }
        [HttpPost]
        public JsonResult GetState([FromBody] State model){
           var  dal = new Dal();
           return Json(dal.GetState(model.Id));

        }
        [HttpPost]
        public JsonResult GetStateImages([FromBody]string id){
            var dal =new Dal();
            var js = dal.GetStateImages(id);
            return Json(js);
        }

        [HttpPost]
        public JsonResult SubmitState([FromBody] State model)
        {
            var dal = new Dal();
            return Json(dal.Insert(model));
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
