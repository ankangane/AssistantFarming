using Microsoft.EntityFrameworkCore.Migrations;

namespace Farming_Assistant.Migrations
{
    public partial class _1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "admins",
                columns: table => new
                {
                    adminId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    role = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    adminQuestion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    adminAnswer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    adminName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    adminEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    adminContanctNo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_admins", x => x.adminId);
                });

            migrationBuilder.CreateTable(
                name: "advertisement",
                columns: table => new
                {
                    advertisementId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    advertisementMessage = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    advertisementStatus = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_advertisement", x => x.advertisementId);
                });

            migrationBuilder.CreateTable(
                name: "complaints",
                columns: table => new
                {
                    complaintsId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    complaintMessage = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    complaintStatus = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_complaints", x => x.complaintsId);
                });

            migrationBuilder.CreateTable(
                name: "crop",
                columns: table => new
                {
                    cropId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cropName = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    cropQuanity = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    cropCategory = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    cropStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    cropPrice = table.Column<string>(type: "varchar(64)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_crop", x => x.cropId);
                });

            migrationBuilder.CreateTable(
                name: "farmer",
                columns: table => new
                {
                    farmerId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    farmerQuestion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    farmerAnswer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    farmerName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    farmerEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    farmerContanctNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    farmerAddress = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_farmer", x => x.farmerId);
                });

            migrationBuilder.CreateTable(
                name: "farmingTips",
                columns: table => new
                {
                    farmingTipsId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    farmingTipsMessage = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_farmingTips", x => x.farmingTipsId);
                });

            migrationBuilder.CreateTable(
                name: "supplier",
                columns: table => new
                {
                    supplierId = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    supplierQuestion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    supplierAnswer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    supplierName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    supplierEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    supplierContanctNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    supplierAddress = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_supplier", x => x.supplierId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "admins");

            migrationBuilder.DropTable(
                name: "advertisement");

            migrationBuilder.DropTable(
                name: "complaints");

            migrationBuilder.DropTable(
                name: "crop");

            migrationBuilder.DropTable(
                name: "farmer");

            migrationBuilder.DropTable(
                name: "farmingTips");

            migrationBuilder.DropTable(
                name: "supplier");
        }
    }
}
