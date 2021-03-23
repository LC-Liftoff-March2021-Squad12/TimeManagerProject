using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TimeManagerProject.Models
{
    public class Calendar
    {
        [Required]
        public int calendarId { get; set; }
        [Required]
        public ApplicationUser user { get; set;}
        public List<CalendarEntry> calendarEntries { get; set; }
    }

}
