using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace capstone.Migrations
{
    public partial class DeletedMoneyModelandDBContextRef : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MoneyPieces");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MoneyPieces",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterId = table.Column<int>(type: "integer", nullable: false),
                    CopperPieces = table.Column<int>(type: "integer", nullable: false),
                    ElectrumPieces = table.Column<int>(type: "integer", nullable: false),
                    GoldPieces = table.Column<int>(type: "integer", nullable: false),
                    PlatinumPieces = table.Column<int>(type: "integer", nullable: false),
                    SilverPieces = table.Column<int>(type: "integer", nullable: false)
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
    }
}
