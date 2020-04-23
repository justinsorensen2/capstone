namespace capstone
{
  public class Money
  {
    public int Id { get; set; }
    public int CopperPieces { get; set; }
    public int SilverPieces { get; set; }
    public int ElectrumPieces { get; set; }
    public int GoldPieces { get; set; }
    public int PlatinumPieces { get; set; }
    //navigation
    public int CharacterId { get; set; }
    public Character Character { get; set; }
  }
}