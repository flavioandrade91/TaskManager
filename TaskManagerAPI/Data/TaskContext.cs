using BCrypt.Net;
using Microsoft.EntityFrameworkCore;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Data
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options):base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<TaskItem> Tasks { get; set; }


               protected override void OnModelCreating(ModelBuilder modelBuilder)
               {
                   modelBuilder.Entity<User>().HasData(new User { 
                     Id = Guid.NewGuid(),
                     Name = "admin",
                     Email = "admin@email.com",
                     PasswordHash = BCrypt.Net.BCrypt.HashPassword("MeshaPass10#"),
                     CreatedAt = DateTime.Now, 
               
               });


            }
        }
    }
