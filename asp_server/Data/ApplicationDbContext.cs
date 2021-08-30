using Microsoft.EntityFrameworkCore;
using asp_server.Models;

namespace asp_server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options
        ) :
            base(options)
        {
        }

        public DbSet<Category> Category { get; set; }

        public DbSet<Dish> Dish { get; set; }

        public DbSet<Order> Order { get; set; }

        public DbSet<OrderMapper> OrderMapper { get; set; }
    }
}
