using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class CombinedMoneyIntoEquip : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CopperPieces",
                table: "Equipment",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ElectrumPieces",
                table: "Equipment",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "GoldPieces",
                table: "Equipment",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PlatinumPieces",
                table: "Equipment",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SilverPieces",
                table: "Equipment",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CopperPieces",
                table: "Equipment");

            migrationBuilder.DropColumn(
                name: "ElectrumPieces",
                table: "Equipment");

            migrationBuilder.DropColumn(
                name: "GoldPieces",
                table: "Equipment");

            migrationBuilder.DropColumn(
                name: "PlatinumPieces",
                table: "Equipment");

            migrationBuilder.DropColumn(
                name: "SilverPieces",
                table: "Equipment");
        }
    }
}
