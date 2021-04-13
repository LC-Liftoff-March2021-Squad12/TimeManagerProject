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
        public int Id { get; set; }
        public string ApptStartDate { get; set; }
        public string ApptEndDate { get; set; }
        public string ApptStartTime { get; set; }
        public string ApptEndTime { get; set; }
        public DateTimeOffset PublishDate { get; set; }
        [StringLength(100)]
        public string Title { get; set; }
        [StringLength(200)]
        public string Description { get; set; }
        
    }
}
