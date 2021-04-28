using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using TimeManagerProject.Data;
using TimeManagerProject.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

namespace TaskLists.Controllers
{   [ApiController]
    [Route("[controller]")]
    public class TaskListsController : ControllerBase
    {
        public readonly ApplicationDbContext db;

        public TaskListsController(ApplicationDbContext db)
        {
            this.db = db;
        }


        // GET: api/TaskLists
        public IQueryable<TaskList> GetTasks()
        {
            return db.Tasks;
        }

        // GET: api/TaskLists/5
        [HttpGet]
        [Route("{id}")]
        //[ResponseType(typeof(TaskList))]
        public ActionResult GetTaskList(int id)
        {
            TaskList taskList = db.Tasks.Find(id);
            if (taskList == null)
            {
                return NotFound();
            }

            return Ok(taskList);
        }

        [HttpGet]
        public ActionResult Get() => Ok(db.Tasks.ToList());

        // PUT: api/TaskLists/5
        [HttpPut]
        //[ResponseType(typeof(void))]
        public ActionResult PutTaskList(int id, TaskList taskList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != taskList.Id)
            {
                return BadRequest();
            }

            db.Entry(taskList).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskListExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(taskList);
        }

        // POST: api/TaskLists
        [HttpPost]
        //[ResponseType(typeof(TaskList))]
        public ActionResult PostTaskList(TaskList taskList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Tasks.Add(taskList);
            db.SaveChanges();
            return Ok(taskList);
            //return CreatedAtRoute("DefaultApi", new { id = taskList.Id }, taskList);
        }

        // DELETE: api/TaskLists/5
        [HttpDelete]
        //[ResponseType(typeof(TaskList))]
        public ActionResult DeleteTaskList(int id)
        {
            TaskList taskList = db.Tasks.Find(id);
            if (taskList == null)
            {
                return NotFound();
            }

            db.Tasks.Remove(taskList);
            db.SaveChanges();

            return Ok(taskList);
        }

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        private bool TaskListExists(int id)
        {
            return db.Tasks.Count(e => e.Id == id) > 0;
        }
    }
}