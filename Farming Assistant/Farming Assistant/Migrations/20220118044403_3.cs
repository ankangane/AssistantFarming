using Microsoft.EntityFrameworkCore.Migrations;

namespace Farming_Assistant.Migrations
{
    public partial class _3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "cropQuanity",
                table: "crop",
                newName: "cropQuantity");

            migrationBuilder.AddColumn<long>(
                name: "farmerId",
                table: "crop",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "farmerId",
                table: "crop");

            migrationBuilder.RenameColumn(
                name: "cropQuantity",
                table: "crop",
                newName: "cropQuanity");
        }
    }
}
