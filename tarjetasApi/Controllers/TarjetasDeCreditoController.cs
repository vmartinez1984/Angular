using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using tarjetasApi.Models;

namespace tarjetasApi.Controllers{
    [ApiController]
    [Route("Api/[controller]")]
    public class TarjetasDeCreditoController: ControllerBase{
        private readonly TarjetaDeCreditoContext _context;

        public TarjetasDeCreditoController(TarjetaDeCreditoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get(){
            try
            {
                List<TarjetaDeCredito> list;

                list = await _context.TarjetaDeCredito.ToListAsync();

                return Ok(list);
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        [HttpGet("id")]
        public async Task<IActionResult> Get(int id){
            try
            {
                TarjetaDeCredito item;
                
                item = await _context.TarjetaDeCredito.Where(x=>x.IsActivo == true && x.Id == id).FirstOrDefaultAsync();
                if(item is null)
                    return NotFound();
                else
                    return Ok(item);
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(TarjetaDeCredito item){
            try
            {
                await _context.TarjetaDeCredito.AddAsync(item);
                await _context.SaveChangesAsync();

                return Created($"Api/TarjetasDeCredito/{item.Id}", new {Id = item.Id});
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put(TarjetaDeCredito item){
            try
            {
                _context.TarjetaDeCredito.Update(item);
                await _context.SaveChangesAsync();
                return Accepted();
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id){
            try
            {
                TarjetaDeCredito item;
                item =await _context.TarjetaDeCredito.FindAsync(id);
                item.IsActivo = false;                
                _context.TarjetaDeCredito.Update(item);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (System.Exception)
            {
                
                throw;
            }
        }
    }
}