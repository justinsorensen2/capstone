namespace capstone
{
  public class Attack
  {
    public int Id { get; set; }
    public string AttackName { get; set; }
    public string AtkBonus { get; set; }
    public string DamageType { get; set; }
    public string Range { get; set; }
    //navigation
    public int EquipId { get; set; }
    public Equip Equip { get; set; }
    public int CharacterId { get; set; }
    public Character Character { get; set; }
  }
}