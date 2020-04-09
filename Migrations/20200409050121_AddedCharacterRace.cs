using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class AddedCharacterRace : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CharacterRace",
                table: "Characters",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CharacterRace",
                table: "Characters");
        }
    }
}
