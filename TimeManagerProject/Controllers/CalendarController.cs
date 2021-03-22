using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TimeManagerProject.Models;
using TimeManagerProject.Data;

namespace TimeManagerProject.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CalendarController: ControllerBase
    {
        public readonly ApplicationDbContext DbContext;
        public CalendarController (ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<List<CalendarEntry>> Get()
        {
            return DbContext.CalendarEntries.ToList();
        }

        //[HttpPost]
        //public ActionResult

        [HttpGet]
        [Route("{CalendarId}")]
        public ActionResult GetUserCalendar([FromRoute] int Id)
            {
                var calendarEvent = DbContext.Calendars.Find(Id);
                return Ok(calendarEvent);
            }

    }
}
