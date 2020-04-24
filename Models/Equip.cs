using System.Collections.Generic;
namespace capstone
{
  public class Equip
  {
    public int Id { get; set; }
    public string EquipName { get; set; }
    public string Bonus { get; set; }
    public string DamageType { get; set; }
    public string Range { get; set; }
    public string Description { get; set; }
    public bool IsWeapon { get; set; }
    //navigation
    public int CharacterId { get; set; }
    public Character Character { get; set; }
    public List<Attack> Attacks { get; set; } = new List<Attack>();
  }
}