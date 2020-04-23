using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace capstone.Migrations
{
    public partial class AddedMoneyModelBack : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "MoneyPieces",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CopperPieces = table.Column<int>(nullable: false),
                    SilverPieces = table.Column<int>(nullable: false),
                    ElectrumPieces = table.Column<int>(nullable: false),
                    GoldPieces = table.Column<int>(nullable: false),
                    PlatinumPieces = table.Column<int>(nullable: false),
                    CharacterId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MoneyPieces", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MoneyPieces_Characters_CharacterId",
                        column: x => x.CharacterId,
                        principalTable: "Characters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MoneyPieces_CharacterId",
                table: "MoneyPieces",
                column: "CharacterId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MoneyPieces");

            migrationBuilder.AddColumn<int>(
                name: "CopperPieces",
                table: "Equipment",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ElectrumPieces",
                table: "Equipment",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "GoldPieces",
                table: "Equipment",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PlatinumPieces",
                table: "Equipment",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SilverPieces",
                table: "Equipment",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
