using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class AddedRangeAndDmgTypeToEquipModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DamageType",
                table: "Equipment",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Range",
                table: "Equipment",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DamageType",
                table: "Equipment");

            migrationBuilder.DropColumn(
                name: "Range",
                table: "Equipment");
        }
    }
}
