namespace capstone
{
  public class Attack
  {
    public int Id { get; set; }
    public string AttackName { get; set; }
    public int AtkBonus { get; set; }
    public string DamageType { get; set; }
    //navigation
    public int CharacterId { get; set; }
    public Character Character { get; set; }
  }
}