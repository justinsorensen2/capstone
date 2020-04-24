using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class CorrectedMedicineSpellingInDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Medecine",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "MedecineProf",
                table: "Skills");

            migrationBuilder.AddColumn<int>(
                name: "Medicine",
                table: "Skills",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "MedicineProf",
                table: "Skills",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Medicine",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "MedicineProf",
                table: "Skills");

            migrationBuilder.AddColumn<int>(
                name: "Medecine",
                table: "Skills",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "MedecineProf",
                table: "Skills",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }
    }
}
