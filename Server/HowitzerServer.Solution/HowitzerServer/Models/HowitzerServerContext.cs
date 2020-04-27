using Microsoft.EntityFrameworkCore;

namespace HowitzerServer.Models
{
  public class HowitzerServerContext : DbContext
  {
    public DbSet<Card> Cards { get; set; }

    public HowitzerServerContext(DbContextOptions<HowitzerServerContext> options)
      : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      for (int i = -10; i < -1; i++)
      {
        builder.Entity<Card>()
          .HasData(
            new Card { CardId = i, Name = "TestCard" + i}
        );
      }
    }
  }
}
