using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace TimeManagerProject.Models
{
    public class TaskEntry
    {
        [Required]
        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        public string Description { get; set; }

        public bool IsDone { get; set; }
       

        public TaskEntry()
        { }

        public TaskEntry(string description)
        {
            Description = description;
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
