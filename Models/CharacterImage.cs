using System.IO;

namespace capstone
{
  public class CharacterImage
  {
    public int Id { get; set; }
    public string FileName { get; set; }
    public string ImageData { get; set; }
    //navigation
    public int CharacterId { get; set; }
    public Character Character { get; set; }
  }
}