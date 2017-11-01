namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CausaDirecta")]
    public partial class CausaDirecta
    {
  

        [Key]
        public int IdCausa { get; set; }

        public int? IdArbolProblema { get; set; }


        [Required]
        [StringLength(140)]

        public string Causa { get; set; }

     
    }
}
