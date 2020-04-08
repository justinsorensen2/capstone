using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace capstone
{
  public class User
  {
    public int Id { get; set; }
    public string UserFirst { get; set; }
    public string UserLast { get; set; }
    public string Email { get; set; }
    [JsonIgnore]
    public string HashedPassword { get; set; }

    //navigation
    public List<Character> Characters = new List<Character>();
  }
}