using System.Collections.Generic;

namespace capstone
{
  public class User
  {
    public int Id { get; set; }
    public string UserFirst { get; set; }
    public string UserLast { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string UserName { get; set; }

    //navigation
    public List<Character> Characters = new List<Character>();
  }
}