using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class RepairedRelBetweenCharAndAttack : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CharacterId",
                table: "Attacks",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_CharacterId",
                table: "Attacks",
                column: "CharacterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Attacks_Characters_CharacterId",
                table: "Attacks",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attacks_Characters_CharacterId",
                table: "Attacks");

            migrationBuilder.DropIndex(
                name: "IX_Attacks_CharacterId",
                table: "Attacks");

            migrationBuilder.DropColumn(
                name: "CharacterId",
                table: "Attacks");
        }
    }
}
