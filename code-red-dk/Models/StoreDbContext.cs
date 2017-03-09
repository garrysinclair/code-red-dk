using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace code_red_dk.Models
{
    public class StoreDbContext : DbContext
    {
        public StoreDbContext() : base("DefaultConnection") { }

        public System.Data.Entity.DbSet<code_red_dk.Models.Person> People { get; set; }
    }
}