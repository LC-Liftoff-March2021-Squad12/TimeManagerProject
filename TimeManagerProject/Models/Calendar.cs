﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TimeManagerProject.Models
{
    public class Calendar
    {
        [Required]
        [Key]
        public int calendarId { get; set; }
        [Required]
        public ApplicationUser User { get; set;}
        public List<CalendarEntry> calendarEntries { get; set; }
    }

}
