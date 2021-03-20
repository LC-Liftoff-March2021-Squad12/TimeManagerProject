﻿using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TimeManagerProject.Models
{
	/// <summary>
	/// Journal List Model.
	/// </summary>
	public class JournalList
	{
		public string Name { get; set; }
		public int Id { get; set; }
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

