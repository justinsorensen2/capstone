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
  public class EquipController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public EquipController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Equip
    [HttpGet("{characterId}")]
    public async Task<ActionResult<IEnumerable<Equip>>> GetEquipment(int characterId)
    {
      return await _context.Equipment.Where(w => w.CharacterId == characterId).ToListAsync();
    }

    // // GET: api/Equip/5
    // [HttpGet("{id}")]
    // public async Task<ActionResult<Equip>> GetEquip(int id)
    // {
    //     var equip = await _context.Equipment.FindAsync(id);

    //     if (equip == null)
    //     {
    //         return NotFound();
    //     }

    //     return equip;
    // }

    // PUT: api/Equip/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("put")]
    public async Task<IActionResult> PutEquip(Equip equip)
    {

      try
      {
        _context.Entry(equip).State = EntityState.Modified;
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!EquipExists(equip.Id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return Ok(equip);
    }

    // POST: api/Equip
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost("create")]
    public async Task<ActionResult<Equip>> PostEquip(Equip equip)
    {
      _context.Equipment.Add(equip);
      await _context.SaveChangesAsync();
      Console.WriteLine($"*****************************{equip}");
      return CreatedAtAction("GetEquip", new { id = equip.Id }, equip);
    }

    // DELETE: api/Equip/5
    [HttpDelete("delete")]
    public async Task<ActionResult<Equip>> DeleteEquip(int id)
    {
      var equip = await _context.Equipment.FindAsync(id);
      if (equip == null)
      {
        return NotFound();
      }

      _context.Equipment.Remove(equip);
      await _context.SaveChangesAsync();

      return equip;
    }

    private bool EquipExists(int id)
    {
      return _context.Equipment.Any(e => e.Id == id);
    }
  }
}
