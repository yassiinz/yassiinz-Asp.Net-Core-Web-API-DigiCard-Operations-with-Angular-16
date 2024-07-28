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
    public class DelivrancesController : ControllerBase
    {
        private readonly CardRequestContext _context;

        public DelivrancesController(CardRequestContext context)
        {
            _context = context;
        }

        // GET: api/Delivrances
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Delivrance>>> GetDelivrance()
        {
            return await _context.Delivrance.ToListAsync();
        }

        // GET: api/Delivrances/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Delivrance>> GetDelivrance(int id)
        {
            var delivrance = await _context.Delivrance.FindAsync(id);

            if (delivrance == null)
            {
                return NotFound();
            }

            return delivrance;
        }

        // PUT: api/Delivrances/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDelivrance(int id, Delivrance delivrance)
        {
            if (id != delivrance.Id)
            {
                return BadRequest();
            }

            _context.Entry(delivrance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DelivranceExists(id))
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

        // POST: api/Delivrances
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Delivrance>> PostDelivrance(Delivrance delivrance)
        {
            _context.Delivrance.Add(delivrance);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDelivrance", new { id = delivrance.Id }, delivrance);
        }

        // DELETE: api/Delivrances/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDelivrance(int id)
        {
            var delivrance = await _context.Delivrance.FindAsync(id);
            if (delivrance == null)
            {
                return NotFound();
            }

            _context.Delivrance.Remove(delivrance);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DelivranceExists(int id)
        {
            return _context.Delivrance.Any(e => e.Id == id);
        }
    }
}
