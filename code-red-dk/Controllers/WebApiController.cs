using code_red_dk.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace code_red_dk.Controllers
{
    public class WebApiController : ApiController
    {
        private StoreDbContext db = new StoreDbContext();

        //public TestController() { }

        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return db.People.Select(pr => pr.Name).ToList();
            //return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return db.People.FirstOrDefault(pr => pr.PersonID == id).Name;
            //return "value";
        }
    }
}