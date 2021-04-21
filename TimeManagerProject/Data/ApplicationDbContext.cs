using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeManagerProject.Models;

namespace TimeManagerProject.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Calendar> Calendars { get; set; }
        public DbSet<CalendarEntry> CalendarEntries { get; set; }
        public DbSet<TaskList> Tasks { get; set; }
        public DbSet<JournalList> UserJournals { get; set; }
        public DbSet<JournalEntry> JournalEntries { get; set; }

    }
}
