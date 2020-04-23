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
  public class MoneyController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public MoneyController(DatabaseContext context)
    {
      _context = context;
    }

    // // GET: api/Money
    // [HttpGet]
    // public async Task<ActionResult<Money>> GetMoneyPieces(int characterId)
    // {
    //   return await _context.MoneyPieces.Where(m => m.CharacterId == characterId)FirstAsync();
    // }

    // GET: api/Money/5
    [HttpGet("{characterId}")]
    public async Task<ActionResult<Money>> GetMoney(int characterId)
    {
      var money = await _context.MoneyPieces.FindAsync(characterId);

      if (money == null)
      {
        return NotFound();
      }

      return money;
    }

    // PUT: api/Money/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("put")]
    public async Task<IActionResult> PutMoney(Money money)
    {

      _context.Entry(money).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!MoneyExists(money.Id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return Ok(money);
    }

    // POST: api/Money
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost("create")]
    public async Task<ActionResult<Money>> PostMoney(Money money)
    {
      _context.MoneyPieces.Add(money);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetMoney", new { id = money.Id }, money);
    }

    // DELETE: api/Money/5
    [HttpDelete("delete")]
    public async Task<ActionResult<Money>> DeleteMoney(int id)
    {
      var money = await _context.MoneyPieces.FindAsync(id);
      if (money == null)
      {
        return NotFound();
      }

      _context.MoneyPieces.Remove(money);
      await _context.SaveChangesAsync();

      return money;
    }

    private bool MoneyExists(int id)
    {
      return _context.MoneyPieces.Any(e => e.Id == id);
    }
  }
}
