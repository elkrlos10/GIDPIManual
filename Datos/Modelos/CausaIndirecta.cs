namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CausaIndirecta")]
    public partial class CausaIndirecta
    {
        [Key]
        public int IdCausaIndirecta { get; set; }

        public int IdCausa { get; set; }

        [Column("CausaIndirecta")]
        [Required]
        [StringLength(140)]

        public string CausaIndirecta1 { get; set; }

      
    }
}
