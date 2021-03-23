using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace TimeManagerProject.Models
{
	/// <summary>
	/// Model for journal entry. 
	/// </summary>
	public class JournalEntry
	{
		public string Name {get; set;}
		public string Description {get; set;}
		public int Id {get; set;}

		public JournalEntry()
			{
			}

		public JournalEntry(string name, string description)
		{
			Name = name;
			Description = description;
		}

        public override string ToString()
        {
            return Name;
        }

        public override bool Equals(object obj)
        {
            return obj is JournalEntry @journalEntry &&
				Id == journalEntry.Id;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id);
        }

    }
}
