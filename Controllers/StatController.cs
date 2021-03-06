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
  public class StatController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public StatController(DatabaseContext context)
    {
      _context = context;
    }

    // // GET: api/Stat/5
    // [HttpGet("{characterId}")]
    // public async Task<ActionResult<Stat>> GetStat(int characterId)
    // {
    //   var stat = await _context.Stats.FindAsync(characterId);

    //   if (stat == null)
    //   {
    //     return NotFound();
    //   }

    //   return stat;
    // }

    // GET: api/Stat
    [HttpGet("{characterId}")]
    public async Task<ActionResult<Stat>> GetStats(int characterId)
    {
      return await _context.Stats.Where(s => s.CharacterId == characterId).FirstAsync();
    }

    // PUT: api/Stat/put, {JSON stat object}
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("put")]
    public async Task<IActionResult> PutStat(Stat stat)
    {
      try
      {
        _context.Entry(stat).State = EntityState.Modified;
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!StatExists(stat.Id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return Ok(stat);
    }

    // POST: api/Stat
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost("create")]
    public async Task<ActionResult<Stat>> PostStat(Stat stat)
    {
      _context.Stats.Add(stat);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetStat", new { id = stat.Id }, stat);
    }

    // DELETE: api/Stat/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Stat>> DeleteStat(int id)
    {
      var stat = await _context.Stats.FindAsync(id);
      if (stat == null)
      {
        return NotFound();
      }

      _context.Stats.Remove(stat);
      await _context.SaveChangesAsync();

      return stat;
    }

    private bool StatExists(int id)
    {
      return _context.Stats.Any(e => e.Id == id);
    }
  }
}
