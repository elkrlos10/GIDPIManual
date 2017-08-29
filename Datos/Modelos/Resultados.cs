namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Resultados
    {
        [Key]
        public int IdResultado { get; set; }

        public int IdObjetivoEsp { get; set; }

        [Required]
        [StringLength(200)]
        public string Resultado { get; set; }

        [Required]
        [StringLength(200)]
        public string MedidaResultado { get; set; }

        [Required]
        [StringLength(200)]
        public string HerramientaResultado { get; set; }

        [Required]
        [StringLength(200)]
        public string ProductoResultado { get; set; }

       
    }
}
