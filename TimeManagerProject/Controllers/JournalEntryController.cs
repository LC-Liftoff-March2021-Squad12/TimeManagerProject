using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeManagerProject.Data;
using TimeManagerProject.Models;

namespace TimeManagerProject.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class JournalEntryController : ControllerBase
    {
        public readonly ApplicationDbContext DbContext;
        public JournalEntryController (ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<List<JournalEntry>> Get()
        {
            return DbContext.JournalEntries.ToList();
        }

        [HttpGet]
        [Route("{JournalId}")]
        public ActionResult GetUserJournal([FromRoute] int journalId)
        {
            var journalEntry = DbContext.UserJournals.Find(journalId);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (journalEntry == null)
            {
                return NotFound();
            }

            return Ok(journalEntry);
        }

        [HttpPost]
        public ActionResult AddJournal(JournalEntry newJournal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newJournal == null)
            {
                return NotFound();
            }
            DbContext.JournalEntries.Add(newJournal);
            DbContext.SaveChanges();
            return Ok(newJournal);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteJournalEntry([FromRoute] int id)
        {
            var journalEntry = DbContext.JournalEntries.Find(id);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (journalEntry == null)
            {
                return NotFound();
            }

            DbContext.JournalEntries.Remove(journalEntry);
            DbContext.SaveChanges();

            return Ok(journalEntry);
        }

        [HttpPost]
        public ActionResult EditJournal(int id, JournalEntry editedJournal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (editedJournal == null)
            {
                return NotFound();
            }

            var origJournal = DbContext.JournalEntries.Find(id);

            origJournal.Title = editedJournal.Title;
            origJournal.Body = editedJournal.Body;

            DbContext.JournalEntries.Update(origJournal);
            DbContext.SaveChanges();
            return Ok(origJournal);
        }

    }
}
