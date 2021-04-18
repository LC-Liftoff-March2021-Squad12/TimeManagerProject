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

namespace TimeManagerProject.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class TaskListsController : ControllerBase
    {
        public readonly ApplicationDbContext DbContext;

        public TaskListsController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<List<TaskEntry>> Get()
        {
            return DbContext.TaskEntries.ToList();
        }

        [HttpGet]
        [Route("{TaskId}")]
        public ActionResult GetTasks([FromRoute] int taskId)
        {
            var taskList = DbContext.Tasks.Find(taskId);
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (taskList == null)
            {
                return NotFound();
            }

            return Ok(taskList);
        }

        [HttpPut]
        public ActionResult AddTask (TaskEntry newTask)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newTask == null)
            {
                return NotFound();
            }
            DbContext.TaskEntries.Add(newTask);
            DbContext.SaveChanges();
            return Ok(newTask);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteTask ([FromRoute] int id)
        {
            var taskEntry = DbContext.TaskEntries.Find(id);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (taskEntry == null)
            {
                return NotFound();
            }

            DbContext.TaskEntries.Remove(taskEntry);
            DbContext.SaveChanges();

            return Ok(taskEntry);
        }

        [HttpPost]
        public ActionResult CompletedTask (int id, TaskEntry completedTask)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (completedTask == null)
            {
                return NotFound();
            }

            var incompleteTask = DbContext.TaskEntries.Find(id);

            incompleteTask.Description = completedTask.Description;
            incompleteTask.IsDone = completedTask.IsDone;

            DbContext.TaskEntries.Update(incompleteTask);
            DbContext.SaveChanges();
            return Ok(incompleteTask);
        }

        private bool TaskListExists(int id)
        {
            return DbContext.Tasks.Count(e => e.Id == id) > 0;
        }
    }
}