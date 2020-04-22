using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class AddedSizeToCharModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Size",
                table: "Characters",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Size",
                table: "Characters");
        }
    }
}
