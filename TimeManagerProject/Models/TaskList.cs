﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeManagerProject.Models
{
    public class TaskList
    {
        [Required]
        [Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Description { get; set; }
        public string IsDone { get; set; }
        //public ApplicationUser User { get; set; }

        //public List<TaskEntry> TaskEntries { get; set; }
    }
}