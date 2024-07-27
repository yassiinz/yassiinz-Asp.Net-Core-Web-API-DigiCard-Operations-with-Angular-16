using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CardAPI.Models;

namespace CardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardRequestsController : ControllerBase
    {
        private readonly CardRequestContext _context;

        public CardRequestsController(CardRequestContext context)
        {
            _context = context;
        }

        // GET: api/CardRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CardRequest>>> GetCardRequests()
        {
            return await _context.CardRequests.ToListAsync();
        }

        // GET: api/CardRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CardRequest>> GetCardRequest(int id)
        {
            var cardRequest = await _context.CardRequests.FindAsync(id);

            if (cardRequest == null)
            {
                return NotFound();
            }

            return cardRequest;
        }

        // PUT: api/CardRequests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCardRequest(int id, CardRequest cardRequest)
        {
            if (id != cardRequest.Id)
            {
                return BadRequest();
            }

            _context.Entry(cardRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CardRequestExists(id))
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

        // POST: api/CardRequests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CardRequest>> PostCardRequest(CardRequest cardRequest)
        {
            _context.CardRequests.Add(cardRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCardRequest", new { id = cardRequest.Id }, cardRequest);
        }

        // DELETE: api/CardRequests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCardRequest(int id)
        {
            var cardRequest = await _context.CardRequests.FindAsync(id);
            if (cardRequest == null)
            {
                return NotFound();
            }

            _context.CardRequests.Remove(cardRequest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CardRequestExists(int id)
        {
            return _context.CardRequests.Any(e => e.Id == id);
        }
    }
}
