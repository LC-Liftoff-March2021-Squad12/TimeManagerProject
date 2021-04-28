using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace TimeManagerProject.Models
{
    public class TaskEntry
    {
        [StringLength(50)]
        public string Description { get; set; }
        public int Id { get; set; }
        public string IsDone { get; set; }
        
        public TaskEntry()
        { }

        public TaskEntry(string description, string isDone)
        {
            Description = description;
            IsDone = isDone;
        }

        public override string ToString()
        {
            return Description;
        }

        public override bool Equals(object obj)
        {
            return obj is TaskEntry @taskEntry && 
                Id == taskEntry.Id;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id);
        }
    }
}
