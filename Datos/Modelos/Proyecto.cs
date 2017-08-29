namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Proyecto")]
    public partial class Proyecto
    {
        

        [Key]
        public int IdProyecto { get; set; }

        [Required]
        [StringLength(50)]
        public string TipoProyecto { get; set; }

        [Required]
        [StringLength(50)]
        public string AccionProyecto { get; set; }

        public int IdMunicipio { get; set; }

        [Required]
        [StringLength(50)]
        public string Sector { get; set; }

        public string TemaProyecto { get; set; }

        public int IdUsuario { get; set; }

        public int Etapa { get; set; }


    }
}
