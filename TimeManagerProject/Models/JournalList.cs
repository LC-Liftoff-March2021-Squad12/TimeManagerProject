using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TimeManagerProject.Models
{
	/// <summary>
	/// Journal List Model.
	/// </summary>
	public class JournalList
	{
		public string Name { get; set; }
		[Required]
		[Key]
		public int Id { get; set; }
		public ApplicationUser User { get; set; }
		public List<JournalEntry> JournalEntries { get; set; }

		public JournalList(string name)
		{
			Name = name;
		}

		//public JournalList(string name)
		//{
		//}

	}
}

