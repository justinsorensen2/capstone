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

        // GET: api/Money
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Money>>> GetMoneyPieces()
        {
            return await _context.MoneyPieces.ToListAsync();
        }

        // GET: api/Money/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Money>> GetMoney(int id)
        {
            var money = await _context.MoneyPieces.FindAsync(id);

            if (money == null)
            {
                return NotFound();
            }

            return money;
        }

        // PUT: api/Money/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMoney(int id, Money money)
        {
            if (id != money.Id)
            {
                return BadRequest();
            }

            _context.Entry(money).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MoneyExists(id))
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

        // POST: api/Money
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Money>> PostMoney(Money money)
        {
            _context.MoneyPieces.Add(money);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMoney", new { id = money.Id }, money);
        }

        // DELETE: api/Money/5
        [HttpDelete("{id}")]
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
