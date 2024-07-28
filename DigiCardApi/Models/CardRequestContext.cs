using Microsoft.EntityFrameworkCore;
namespace CardAPI.Models
{
    public class CardRequestContext : DbContext
    {
        public CardRequestContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<CardRequest> CardRequests { get; set; }
        public DbSet<Companies> Companies {  get; set; }
        public DbSet<Delivrance> Delivrance { get; set; }
    }
}
