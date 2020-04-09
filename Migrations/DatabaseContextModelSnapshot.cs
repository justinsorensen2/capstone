﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using capstone.Models;

namespace capstone.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("capstone.Attack", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("AtkBonus")
                        .HasColumnType("integer");

                    b.Property<string>("AttackName")
                        .HasColumnType("text");

                    b.Property<int>("CharacterId")
                        .HasColumnType("integer");

                    b.Property<string>("DamageType")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CharacterId");

                    b.ToTable("Attacks");
                });

            modelBuilder.Entity("capstone.Character", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("AlliesOrganizations")
                        .HasColumnType("text");

                    b.Property<string>("BackStory")
                        .HasColumnType("text");

                    b.Property<string>("Bonds")
                        .HasColumnType("text");

                    b.Property<int?>("CharacterAge")
                        .HasColumnType("integer");

                    b.Property<string>("CharacterClass")
                        .HasColumnType("text");

                    b.Property<string>("CharacterFirst")
                        .HasColumnType("text");

                    b.Property<string>("CharacterLast")
                        .HasColumnType("text");

                    b.Property<string>("CharacterRace")
                        .HasColumnType("text");

                    b.Property<string>("FeaturesTraits")
                        .HasColumnType("text");

                    b.Property<string>("Flaws")
                        .HasColumnType("text");

                    b.Property<string>("Ideals")
                        .HasColumnType("text");

                    b.Property<string>("ImagePath")
                        .HasColumnType("text");

                    b.Property<string>("Languages")
                        .HasColumnType("text");

                    b.Property<bool>("MultiClass")
                        .HasColumnType("boolean");

                    b.Property<string>("OtherProficiencies")
                        .HasColumnType("text");

                    b.Property<string>("PersonalityTraits")
                        .HasColumnType("text");

                    b.Property<int>("PrimaryClassLevel")
                        .HasColumnType("integer");

                    b.Property<string>("SecondaryClass")
                        .HasColumnType("text");

                    b.Property<int?>("SecondaryClassLevel")
                        .HasColumnType("integer");

                    b.Property<string>("Treasure")
                        .HasColumnType("text");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Characters");
                });

            modelBuilder.Entity("capstone.Equip", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Bonus")
                        .HasColumnType("text");

                    b.Property<int>("CharacterId")
                        .HasColumnType("integer");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("EquipName")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CharacterId");

                    b.ToTable("Equipment");
                });

            modelBuilder.Entity("capstone.Money", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("CharacterId")
                        .HasColumnType("integer");

                    b.Property<int>("CopperPieces")
                        .HasColumnType("integer");

                    b.Property<int>("ElectrumPieces")
                        .HasColumnType("integer");

                    b.Property<int>("GoldPieces")
                        .HasColumnType("integer");

                    b.Property<int>("PlatinumPieces")
                        .HasColumnType("integer");

                    b.Property<int>("SilverPieces")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("CharacterId");

                    b.ToTable("MoneyPieces");
                });

            modelBuilder.Entity("capstone.Skill", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("Acrobatics")
                        .HasColumnType("integer");

                    b.Property<bool>("AcrobaticsProf")
                        .HasColumnType("boolean");

                    b.Property<int>("AnimalHandling")
                        .HasColumnType("integer");

                    b.Property<bool>("AnimalHandlingProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Arcana")
                        .HasColumnType("integer");

                    b.Property<bool>("ArcanaProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Athletics")
                        .HasColumnType("integer");

                    b.Property<bool>("AthleticsProf")
                        .HasColumnType("boolean");

                    b.Property<int>("CharacterId")
                        .HasColumnType("integer");

                    b.Property<int>("Deception")
                        .HasColumnType("integer");

                    b.Property<bool>("DeceptionProf")
                        .HasColumnType("boolean");

                    b.Property<int>("History")
                        .HasColumnType("integer");

                    b.Property<bool>("HistoryProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Insight")
                        .HasColumnType("integer");

                    b.Property<bool>("InsightProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Intimidation")
                        .HasColumnType("integer");

                    b.Property<bool>("IntimidationProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Investigation")
                        .HasColumnType("integer");

                    b.Property<bool>("InvestigationProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Medecine")
                        .HasColumnType("integer");

                    b.Property<bool>("MedecineProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Nature")
                        .HasColumnType("integer");

                    b.Property<bool>("NatureProf")
                        .HasColumnType("boolean");

                    b.Property<int>("PassivePerception")
                        .HasColumnType("integer");

                    b.Property<int>("Perception")
                        .HasColumnType("integer");

                    b.Property<bool>("PerceptionProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Performance")
                        .HasColumnType("integer");

                    b.Property<bool>("PerformanceProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Persuasion")
                        .HasColumnType("integer");

                    b.Property<bool>("PersuasionProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Religion")
                        .HasColumnType("integer");

                    b.Property<bool>("ReligionProf")
                        .HasColumnType("boolean");

                    b.Property<int>("SleightOfHand")
                        .HasColumnType("integer");

                    b.Property<bool>("SleightOfHandProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Stealth")
                        .HasColumnType("integer");

                    b.Property<bool>("StealthProf")
                        .HasColumnType("boolean");

                    b.Property<int>("Survival")
                        .HasColumnType("integer");

                    b.Property<bool>("SurvivalProf")
                        .HasColumnType("boolean");

                    b.HasKey("Id");

                    b.HasIndex("CharacterId");

                    b.ToTable("Skills");
                });

            modelBuilder.Entity("capstone.Stat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("ArmorClass")
                        .HasColumnType("integer");

                    b.Property<int>("BaseSpeed")
                        .HasColumnType("integer");

                    b.Property<int>("ChaMod")
                        .HasColumnType("integer");

                    b.Property<int>("CharacterId")
                        .HasColumnType("integer");

                    b.Property<int>("Charisma")
                        .HasColumnType("integer");

                    b.Property<int>("ConMod")
                        .HasColumnType("integer");

                    b.Property<int>("Constitution")
                        .HasColumnType("integer");

                    b.Property<int>("CurrentHP")
                        .HasColumnType("integer");

                    b.Property<int>("CurrentHitDie")
                        .HasColumnType("integer");

                    b.Property<int>("DexMod")
                        .HasColumnType("integer");

                    b.Property<int>("Dexterity")
                        .HasColumnType("integer");

                    b.Property<string>("HitDie")
                        .HasColumnType("text");

                    b.Property<int>("InitiativeBonus")
                        .HasColumnType("integer");

                    b.Property<bool>("Inspiration")
                        .HasColumnType("boolean");

                    b.Property<int>("IntMod")
                        .HasColumnType("integer");

                    b.Property<int>("Intelligence")
                        .HasColumnType("integer");

                    b.Property<int>("MaxHP")
                        .HasColumnType("integer");

                    b.Property<int>("ProficiencyBonus")
                        .HasColumnType("integer");

                    b.Property<int>("StrMod")
                        .HasColumnType("integer");

                    b.Property<int>("Strength")
                        .HasColumnType("integer");

                    b.Property<int>("TempHP")
                        .HasColumnType("integer");

                    b.Property<int>("TotalHitDie")
                        .HasColumnType("integer");

                    b.Property<int>("WisMod")
                        .HasColumnType("integer");

                    b.Property<int>("Wisdom")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("CharacterId");

                    b.ToTable("Stats");
                });

            modelBuilder.Entity("capstone.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("HashedPassword")
                        .HasColumnType("text");

                    b.Property<string>("UserFirst")
                        .HasColumnType("text");

                    b.Property<string>("UserLast")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("capstone.Attack", b =>
                {
                    b.HasOne("capstone.Character", "Character")
                        .WithMany("Attacks")
                        .HasForeignKey("CharacterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("capstone.Character", b =>
                {
                    b.HasOne("capstone.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("capstone.Equip", b =>
                {
                    b.HasOne("capstone.Character", "Character")
                        .WithMany("Equipment")
                        .HasForeignKey("CharacterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("capstone.Money", b =>
                {
                    b.HasOne("capstone.Character", "Character")
                        .WithMany("MoneyPieces")
                        .HasForeignKey("CharacterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("capstone.Skill", b =>
                {
                    b.HasOne("capstone.Character", "Character")
                        .WithMany("Skills")
                        .HasForeignKey("CharacterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("capstone.Stat", b =>
                {
                    b.HasOne("capstone.Character", "Character")
                        .WithMany("Stats")
                        .HasForeignKey("CharacterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
