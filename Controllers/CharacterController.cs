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
  public class CharacterController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public CharacterController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Character/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Character>> GetCharacter(int id)
    {
      var character = await _context.Characters.FindAsync(id);

      if (character == null)
      {
        return NotFound();
      }

      return character;
    }

    // GET: api/Character
    [HttpGet("charlist/{userId}")]
    public async Task<ActionResult<IEnumerable<Character>>> GetCharacters(int userId)
    {
      return await _context.Characters.Where(c => c.UserId == userId).ToListAsync();
    }

    // PUT: api/Character/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("put")]
    public async Task<IActionResult> PutCharacter(Character character)
    {
      try
      {
        _context.Entry(character).State = EntityState.Modified;
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CharacterExists(character.Id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return Ok(character);
    }

    // POST: api/Character
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost("create")]
    public async Task<ActionResult<Character>> PostCharacter(Character character)
    {
      _context.Characters.Add(character);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetCharacter", new { id = character.Id }, character);
    }

    // DELETE: api/Character/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Character>> DeleteCharacter(int id)
    {
      var character = await _context.Characters.FindAsync(id);
      if (character == null)
      {
        return NotFound();
      }

      _context.Characters.Remove(character);
      await _context.SaveChangesAsync();

      return character;
    }

    private bool CharacterExists(int id)
    {
      return _context.Characters.Any(e => e.Id == id);
    }
  }
}
