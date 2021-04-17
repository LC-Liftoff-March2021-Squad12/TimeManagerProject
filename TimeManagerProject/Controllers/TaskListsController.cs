using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http.Description;
using TimeManagerProject.Data;
using TimeManagerProject.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;
using System.Web.Http;

namespace TaskLists.Controllers
{
    public class TaskListsController : ApiController
    {
        ApplicationDbContext db;

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
        [ResponseType(typeof(TaskList))]
        public IHttpActionResult GetTaskList(int id)
        {
            TaskList taskList = db.Tasks.Find(id);
            if (taskList == null)
            {
                return NotFound();
            }

            return Ok(taskList);
        }

        // PUT: api/TaskLists/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTaskList(int id, TaskList taskList)
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

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TaskLists
        [ResponseType(typeof(TaskList))]
        public IHttpActionResult PostTaskList(TaskList taskList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Tasks.Add(taskList);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = taskList.Id }, taskList);
        }

        // DELETE: api/TaskLists/5
        [ResponseType(typeof(TaskList))]
        public IHttpActionResult DeleteTaskList(int id)
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

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TaskListExists(int id)
        {
            return db.Tasks.Count(e => e.Id == id) > 0;
        }
    }
}