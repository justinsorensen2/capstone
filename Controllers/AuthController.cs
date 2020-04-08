using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using capstone.Models;
using capstone.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace capstone.Controllers
{
  [Route("auth")]
  [ApiController]
  public class AuthController : ControllerBase
  {

    readonly private DatabaseContext _context;
    readonly private string JWT_KEY;

    public AuthController(DatabaseContext context, IConfiguration config)
    {
      JWT_KEY = config["JWT_KEY"];
      _context = context;
    }

    private string CreateJWT(User user)
    {
      var expirationTime = DateTime.UtcNow.AddHours(10);

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
        {
            new Claim("id", user.Id.ToString()),
            new Claim("email", user.Email),
            new Claim("firstname", user.UserFirst),
            new Claim("lastname", user.UserLast)
      }),
        Expires = expirationTime,
        SigningCredentials = new SigningCredentials(
               new SymmetricSecurityKey(Encoding.ASCII.GetBytes(JWT_KEY)),
              SecurityAlgorithms.HmacSha256Signature
          )
      };
      var tokenHandler = new JwtSecurityTokenHandler();
      var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));


      return token;
    }

    [HttpPost("register")]
    public async Task<ActionResult> SignUpNewUser(NewUser newUser)
    {
      if (newUser.UserPass.Length < 7)
      {
        return BadRequest("Password must be a minimum of 7 characters.");
      }


      // verify the user does not already exist
      var exists = _context.Users.Any(a => a.Email.ToLower() == newUser.Email.ToLower());
      if (exists)
      {
        return BadRequest("That email address is already in use.");
      }

      // create the user
      var user = new User
      {
        Email = newUser.Email,
        UserFirst = newUser.UserFirst,
        UserLast = newUser.UserLast
      };

      // hash the password
      var hashed = new PasswordHasher<User>().HashPassword(user, newUser.UserPass);
      user.HashedPassword = hashed;

      //add user to DB then save changes
      _context.Users.Add(user);
      await _context.SaveChangesAsync();

      //return the javascript web token
      return Ok(new { token = CreateJWT(user), user = user });
    }


    [HttpPost("login")]
    public async Task<IActionResult> LoginUser(UserLogin loginInfo)
    {
      // check if the user exists
      var user = await _context.Users.FirstOrDefaultAsync(f => f.Email.ToLower() == loginInfo.Email.ToLower());
      if (user == null)
      {
        return BadRequest("User does not exist");
      }
      // validate the user's password
      var results = new PasswordHasher<User>().VerifyHashedPassword(user, user.HashedPassword, loginInfo.Password);
      if (results == PasswordVerificationResult.Success)
      {
        // create JWT
        return Ok(new { token = CreateJWT(user), user = user });

      }
      else
      {
        return BadRequest("Password does not match");
      }
    }

  }

}