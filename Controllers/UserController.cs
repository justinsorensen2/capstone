using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using capstone;
using capstone.Models;

namespace capstone.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public UserController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/user/profile/{email}
    [HttpGet("profile/{email}")]
    public async Task<ActionResult<User>> GetUser(string email)
    {
      var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

      if (user == null)
      {
        return NotFound();
      }

      return Ok(user);
    }

    // PUT: api/User/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("/profile/change/{userChanging}")]
    public async Task<IActionResult> PutUser(User userChanging)
    {
      var id = _context.Users.FindAsync(userChanging.Id);

      if (id == null)
      {
        return BadRequest();
      }

      _context.Entry(userChanging).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!UserExists(userChanging.Id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/User
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<User>> PostUser(User user)
    {
      _context.Users.Add(user);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetUser", new { id = user.Id }, user);
    }

    // DELETE: api/User/5
    [HttpDelete("/profile/delete/{id}")]
    public async Task<ActionResult<User>> DeleteUser(int id)
    {
      var user = await _context.Users.FindAsync(id);
      if (user == null)
      {
        return NotFound();
      }

      _context.Users.Remove(user);
      await _context.SaveChangesAsync();

      return user;
    }

    private bool UserExists(int id)
    {
      return _context.Users.Any(e => e.Id == id);
    }
  }
}
