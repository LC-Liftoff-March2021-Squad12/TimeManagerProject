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
		[StringLength(100)]
		public string Title {get; set;}
		public string Body {get; set;}
		public int Id {get; set;}
		public DateTime Date { get; set; }

		public JournalEntry()
			{
			}

		public JournalEntry(string title, string body)
		{
			Title = title;
			Body = body;
			Date = DateTime.Now;
		}

        public override string ToString()
        {
            return Title;
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
