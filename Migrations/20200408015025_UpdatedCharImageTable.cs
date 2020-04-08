using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class UpdatedCharImageTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FileName",
                table: "CharacterImages");

            migrationBuilder.DropColumn(
                name: "ImageData",
                table: "CharacterImages");

            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "CharacterImages",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "CharacterImages",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "CharacterImages");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "CharacterImages");

            migrationBuilder.AddColumn<string>(
                name: "FileName",
                table: "CharacterImages",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageData",
                table: "CharacterImages",
                type: "text",
                nullable: true);
        }
    }
}
