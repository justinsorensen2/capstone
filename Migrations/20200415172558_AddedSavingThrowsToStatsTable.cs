using Microsoft.EntityFrameworkCore.Migrations;

namespace capstone.Migrations
{
    public partial class AddedSavingThrowsToStatsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ChaSavingThrow",
                table: "Stats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "ChaSavingThrowProf",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "ConSavingThrow",
                table: "Stats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "ConSavingThrowProf",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "DeathSaveFailure1",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "DeathSaveFailure2",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "DeathSaveFailure3",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "DeathSaveSuccess1",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "DeathSaveSuccess2",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "DeathSaveSuccess3",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "DexSavingThrow",
                table: "Stats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "DexSavingThrowProf",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "IntSavingThrow",
                table: "Stats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IntSavingThrowProf",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "StrSavingThrow",
                table: "Stats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "StrSavingThrowProf",
                table: "Stats",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "WisSavingThrow",
                table: "Stats",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "WisSavingThrowProf",
                table: "Stats",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ChaSavingThrow",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "ChaSavingThrowProf",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "ConSavingThrow",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "ConSavingThrowProf",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "DeathSaveFailure1",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "DeathSaveFailure2",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "DeathSaveFailure3",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "DeathSaveSuccess1",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "DeathSaveSuccess2",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "DeathSaveSuccess3",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "DexSavingThrow",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "DexSavingThrowProf",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "IntSavingThrow",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "IntSavingThrowProf",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "StrSavingThrow",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "StrSavingThrowProf",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "WisSavingThrow",
                table: "Stats");

            migrationBuilder.DropColumn(
                name: "WisSavingThrowProf",
                table: "Stats");
        }
    }
}
