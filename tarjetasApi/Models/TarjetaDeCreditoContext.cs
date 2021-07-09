using Microsoft.EntityFrameworkCore;

namespace tarjetasApi.Models{

public class TarjetaDeCreditoContext: DbContext{
    public DbSet<TarjetaDeCredito> TarjetaDeCredito { get; set; }
    public TarjetaDeCreditoContext(DbContextOptions<TarjetaDeCreditoContext> options):base(options)
    {
        
    }
}
}