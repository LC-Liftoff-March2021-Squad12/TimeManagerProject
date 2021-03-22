using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TimeManagerProject.Models
{
    public class CalendarEntry
    {
        [Required]
        public int id { get; set; }
        public string apptStartDate { get; set; }
        public string apptEndDate { get; set; }
        public string apptStartTime { get; set; }
        public string apptEndTime { get; set; }
        public DateTimeOffset publishDate { get; set; }

        [StringLength(100)]
        string title { get; set; }
        [StringLength(200)]
        public string description { get; set; }
        
    }
}
