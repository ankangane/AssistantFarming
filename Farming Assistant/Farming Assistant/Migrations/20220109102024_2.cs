using Microsoft.EntityFrameworkCore.Migrations;

namespace Farming_Assistant.Migrations
{
    public partial class _2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "cropPrice",
                table: "crop",
                newName: "cropPriceInRupeesPerKg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "cropPriceInRupeesPerKg",
                table: "crop",
                newName: "cropPrice");
        }
    }
}
