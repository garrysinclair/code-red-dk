using code_red_dk.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace code_red_dk.Controllers
{
    public class Album2Controller : Controller
    {
        // GET: Album2
        public ActionResult Index()
        {
            return View();
        }

        // GET: Album2/Details/5
        public ActionResult Details(int id)
        {
            var album = new Album2 { AlbumID = id, Title = "Hello" };
            return View(album);
        }

        // GET: Album2/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Album2/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Album2/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Album2/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Album2/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Album2/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
