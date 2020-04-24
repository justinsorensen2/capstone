using System.Collections.Generic;

namespace capstone
{
  public class Character
  {
    public int Id { get; set; }
    public string CharacterFirst { get; set; }
    public string CharacterLast { get; set; }
    public int? CharacterAge { get; set; }
    public string CharacterRace { get; set; }
    public string CharacterClass { get; set; }
    public bool MultiClass { get; set; }
    public string SecondaryClass { get; set; }
    public int PrimaryClassLevel { get; set; }
    public int? SecondaryClassLevel { get; set; }
    public string Languages { get; set; }
    public string OtherProficiencies { get; set; }
    public string PersonalityTraits { get; set; }
    public string Ideals { get; set; }
    public string Bonds { get; set; }
    public string Flaws { get; set; }
    public string FeaturesTraits { get; set; }
    public string AlliesOrganizations { get; set; }
    public string BackStory { get; set; }
    public string Treasure { get; set; }
    public string ImagePath { get; set; }
    public string Alignment { get; set; }
    public int Darkvision { get; set; }
    public int ExperiencePoints { get; set; }
    public string Size { get; set; }
    //navigation
    public List<Stat> Stats { get; set; } = new List<Stat>();
    public List<Skill> Skills { get; set; } = new List<Skill>();
    public List<Attack> Attacks { get; set; } = new List<Attack>();
    public List<Equip> Equipment { get; set; } = new List<Equip>();
    public List<Money> MoneyPieces { get; set; } = new List<Money>();
    public int UserId { get; set; }
    public User User { get; set; }


  }
}