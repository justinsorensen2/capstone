using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace capstone.Migrations
{
    public partial class CreatedTablesAndNav : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserFirst = table.Column<string>(nullable: true),
                    UserLast = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Characters",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterFirst = table.Column<string>(nullable: true),
                    CharacterLast = table.Column<string>(nullable: true),
                    CharacterAge = table.Column<int>(nullable: true),
                    CharacterClass = table.Column<string>(nullable: true),
                    MultiClass = table.Column<bool>(nullable: false),
                    SecondaryClass = table.Column<string>(nullable: true),
                    PrimaryClassLevel = table.Column<int>(nullable: false),
                    SecondaryClassLevel = table.Column<int>(nullable: true),
                    Languages = table.Column<string>(nullable: true),
                    OtherProficiencies = table.Column<string>(nullable: true),
                    PersonalityTraits = table.Column<string>(nullable: true),
                    Ideals = table.Column<string>(nullable: true),
                    Bonds = table.Column<string>(nullable: true),
                    Flaws = table.Column<string>(nullable: true),
                    FeaturesTraits = table.Column<string>(nullable: true),
                    AlliesOrganizations = table.Column<string>(nullable: true),
                    BackStory = table.Column<string>(nullable: true),
                    Treasure = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Characters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Characters_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Attacks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    AttackName = table.Column<string>(nullable: true),
                    AtkBonus = table.Column<int>(nullable: false),
                    DamageType = table.Column<string>(nullable: true),
                    CharacterId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attacks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Attacks_Characters_CharacterId",
                        column: x => x.CharacterId,
                        principalTable: "Characters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CharacterImages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FileName = table.Column<string>(nullable: true),
                    ImageData = table.Column<string>(nullable: true),
                    CharacterId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CharacterImages_Characters_CharacterId",
                        column: x => x.CharacterId,
                        principalTable: "Characters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Equipment",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    EquipName = table.Column<string>(nullable: true),
                    Bonus = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    CharacterId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Equipment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Equipment_Characters_CharacterId",
                        column: x => x.CharacterId,
                        principalTable: "Characters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateTable(
                name: "Skills",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Acrobatics = table.Column<int>(nullable: false),
                    AcrobaticsProf = table.Column<bool>(nullable: false),
                    AnimalHandling = table.Column<int>(nullable: false),
                    AnimalHandlingProf = table.Column<bool>(nullable: false),
                    Arcana = table.Column<int>(nullable: false),
                    ArcanaProf = table.Column<bool>(nullable: false),
                    Athletics = table.Column<int>(nullable: false),
                    AthleticsProf = table.Column<bool>(nullable: false),
                    Deception = table.Column<int>(nullable: false),
                    DeceptionProf = table.Column<bool>(nullable: false),
                    History = table.Column<int>(nullable: false),
                    HistoryProf = table.Column<bool>(nullable: false),
                    Insight = table.Column<int>(nullable: false),
                    InsightProf = table.Column<bool>(nullable: false),
                    Intimidation = table.Column<int>(nullable: false),
                    IntimidationProf = table.Column<bool>(nullable: false),
                    Investigation = table.Column<int>(nullable: false),
                    InvestigationProf = table.Column<bool>(nullable: false),
                    Medecine = table.Column<int>(nullable: false),
                    MedecineProf = table.Column<bool>(nullable: false),
                    Nature = table.Column<int>(nullable: false),
                    NatureProf = table.Column<bool>(nullable: false),
                    Perception = table.Column<int>(nullable: false),
                    PerceptionProf = table.Column<bool>(nullable: false),
                    Performance = table.Column<int>(nullable: false),
                    PerformanceProf = table.Column<bool>(nullable: false),
                    Persuasion = table.Column<int>(nullable: false),
                    PersuasionProf = table.Column<bool>(nullable: false),
                    Religion = table.Column<int>(nullable: false),
                    ReligionProf = table.Column<bool>(nullable: false),
                    SleightOfHand = table.Column<int>(nullable: false),
                    SleightOfHandProf = table.Column<bool>(nullable: false),
                    Stealth = table.Column<int>(nullable: false),
                    StealthProf = table.Column<bool>(nullable: false),
                    Survival = table.Column<int>(nullable: false),
                    SurvivalProf = table.Column<bool>(nullable: false),
                    PassivePerception = table.Column<int>(nullable: false),
                    CharacterId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skills", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Skills_Characters_CharacterId",
                        column: x => x.CharacterId,
                        principalTable: "Characters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Stats",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Strength = table.Column<int>(nullable: false),
                    StrMod = table.Column<int>(nullable: false),
                    Dexterity = table.Column<int>(nullable: false),
                    DexMod = table.Column<int>(nullable: false),
                    Constitution = table.Column<int>(nullable: false),
                    ConMod = table.Column<int>(nullable: false),
                    Intelligence = table.Column<int>(nullable: false),
                    IntMod = table.Column<int>(nullable: false),
                    Wisdom = table.Column<int>(nullable: false),
                    WisMod = table.Column<int>(nullable: false),
                    Charisma = table.Column<int>(nullable: false),
                    ChaMod = table.Column<int>(nullable: false),
                    ProficiencyBonus = table.Column<int>(nullable: false),
                    Inspiration = table.Column<bool>(nullable: false),
                    ArmorClass = table.Column<int>(nullable: false),
                    InitiativeBonus = table.Column<int>(nullable: false),
                    BaseSpeed = table.Column<int>(nullable: false),
                    HitDie = table.Column<string>(nullable: true),
                    TotalHitDie = table.Column<int>(nullable: false),
                    CurrentHitDie = table.Column<int>(nullable: false),
                    MaxHP = table.Column<int>(nullable: false),
                    CurrentHP = table.Column<int>(nullable: false),
                    TempHP = table.Column<int>(nullable: false),
                    CharacterId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stats", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Stats_Characters_CharacterId",
                        column: x => x.CharacterId,
                        principalTable: "Characters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_CharacterId",
                table: "Attacks",
                column: "CharacterId");

            migrationBuilder.CreateIndex(
                name: "IX_CharacterImages_CharacterId",
                table: "CharacterImages",
                column: "CharacterId");

            migrationBuilder.CreateIndex(
                name: "IX_Characters_UserId",
                table: "Characters",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Equipment_CharacterId",
                table: "Equipment",
                column: "CharacterId");

            migrationBuilder.CreateIndex(
                name: "IX_MoneyPieces_CharacterId",
                table: "MoneyPieces",
                column: "CharacterId");

            migrationBuilder.CreateIndex(
                name: "IX_Skills_CharacterId",
                table: "Skills",
                column: "CharacterId");

            migrationBuilder.CreateIndex(
                name: "IX_Stats_CharacterId",
                table: "Stats",
                column: "CharacterId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Attacks");

            migrationBuilder.DropTable(
                name: "CharacterImages");

            migrationBuilder.DropTable(
                name: "Equipment");

            migrationBuilder.DropTable(
                name: "MoneyPieces");

            migrationBuilder.DropTable(
                name: "Skills");

            migrationBuilder.DropTable(
                name: "Stats");

            migrationBuilder.DropTable(
                name: "Characters");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
