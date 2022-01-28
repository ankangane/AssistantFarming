using Farming_Assistant.Entites;
using Microsoft.EntityFrameworkCore;

namespace Farming_Assistant.Context
{
    public class FarmingAssistantDbContext : DbContext
    {
        public FarmingAssistantDbContext(DbContextOptions<FarmingAssistantDbContext> options) : base(options)
        {

        }
        public virtual DbSet<Admin> Admins { get; set; } //admin table
        public virtual DbSet<Advertisement> Advertisements { get; set; } //advertisement table
        public virtual DbSet<Complaint> Complaints { get; set; } //complaint table
        public virtual DbSet<Crop> Crops { get; set; } //crop table
        public virtual DbSet<Farmer> Farmers { get; set; } //farmer table
        public virtual DbSet<FarmingTips> FarmingTips { get; set; } //farmingtips table
        public virtual DbSet<Supplier> Suppliers { get; set; } //supplier table
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {

        }
    }
}
