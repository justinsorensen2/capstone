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
  public class SkillController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public SkillController(DatabaseContext context)
    {
      _context = context;
    }

    // // GET: api/Skill
    // [HttpGet]
    // public async Task<ActionResult<IEnumerable<Skill>>> GetSkills()
    // {
    //   return await _context.Skills.ToListAsync();
    // }

    // GET: api/Skill/5
    [HttpGet("{characterId}")]
    public async Task<ActionResult<Skill>> GetSkill(int characterId)
    {
      var skill = await _context.Skills.Where(s => s.CharacterId == characterId).FirstAsync();

      if (skill == null)
      {
        return NotFound();
      }

      return skill;
    }

    // PUT: api/Skill/put/{skill JSON Obj}
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("put")]
    public async Task<IActionResult> PutSkill(Skill skill)
    {
      try
      {
        _context.Entry(skill).State = EntityState.Modified;
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!SkillExists(skill.Id))
        {
          Console.WriteLine($"*************** the id is {skill.Id}");
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return Ok(skill);
    }

    // POST: api/Skill
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost("create")]
    public async Task<ActionResult<Skill>> PostSkill(Skill skill)
    {
      _context.Skills.Add(skill);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetSkill", new { id = skill.Id }, skill);
    }

    // DELETE: api/Skill/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Skill>> DeleteSkill(int id)
    {
      var skill = await _context.Skills.FindAsync(id);
      if (skill == null)
      {
        return NotFound();
      }

      _context.Skills.Remove(skill);
      await _context.SaveChangesAsync();

      return skill;
    }

    private bool SkillExists(int id)
    {
      return _context.Skills.Any(e => e.Id == id);
    }
  }
}
