﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using TimeManagerProject.Models;
using TimeManagerProject.Data;

namespace TimeManagerProject.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CalendarEntryController: ControllerBase
    {
        public readonly ApplicationDbContext DbContext;
        public CalendarEntryController (ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<List<CalendarEntry>> Get()
        {
            return DbContext.CalendarEntries.ToList();
        }

        [HttpGet]
        [Route("{CalendarId}")]
        public ActionResult GetUserCalendar([FromRoute] int calendarId)
            {
                var calendarEvent = DbContext.Calendars.Find(calendarId);
                
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                if (calendarEvent == null)
                {
                    return NotFound();
                }   

                return Ok(calendarEvent);
            }

        [HttpPost]
        public ActionResult AddEvent(CalendarEntry newEvent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newEvent == null)
            {
                return NotFound();
            }
            DbContext.CalendarEntries.Add(newEvent);
            DbContext.SaveChanges();
            return Ok(newEvent);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteEvent([FromRoute] int id)
        {
            var calendarEvent = DbContext.CalendarEntries.Find(id);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (calendarEvent == null)
            {
                return NotFound();
            }

            DbContext.CalendarEntries.Remove(calendarEvent);
            DbContext.SaveChanges();

            return Ok(calendarEvent);
        }

        [HttpPost]
        public ActionResult EditEvent(int id, CalendarEntry newEvent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newEvent == null)
            {
                return NotFound();
            }

            var calendarEvent = DbContext.CalendarEntries.Find(id);

            calendarEvent.ApptEndDate = newEvent.ApptEndDate;
            calendarEvent.ApptStartDate = newEvent.ApptStartDate;
            calendarEvent.ApptStartTime = newEvent.ApptStartTime;
            calendarEvent.ApptEndTime = newEvent.ApptEndTime;
            calendarEvent.Description = newEvent.Description;
            calendarEvent.Title = newEvent.Title;

            DbContext.CalendarEntries.Update(calendarEvent);
            DbContext.SaveChanges();
            return Ok(newEvent);
        }
    }
}
