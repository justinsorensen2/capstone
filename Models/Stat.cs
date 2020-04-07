namespace capstone
{
  public class Stat
  {
    public int Id { get; set; }
    public int Strength { get; set; }
    public int StrMod { get; set; }
    public int Dexterity { get; set; }
    public int DexMod { get; set; }
    public int Constitution { get; set; }
    public int ConMod { get; set; }
    public int Intelligence { get; set; }
    public int IntMod { get; set; }
    public int Wisdom { get; set; }
    public int WisMod { get; set; }
    public int Charisma { get; set; }
    public int ChaMod { get; set; }
    public int ProficiencyBonus { get; set; }
    public bool Inspiration { get; set; }
    public int ArmorClass { get; set; }
    public int InitiativeBonus { get; set; }
    public int BaseSpeed { get; set; }
    public string HitDie { get; set; }
    public int TotalHitDie { get; set; }
    public int CurrentHitDie { get; set; }
    public int MaxHP { get; set; }
    public int CurrentHP { get; set; }
    public int TempHP { get; set; }

    //navigation
    public int CharacterId { get; set; }
    public Character Character { get; set; }
  }
}