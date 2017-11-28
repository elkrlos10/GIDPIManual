namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Usuario")]
    public partial class Usuario
    {
      

        [Key]
        public int IdUsuario { get; set; }

        [Required]
        [StringLength(20)]
        public string Usuario1 { get; set; }

        [Required]
    
        public string Contrasena { get; set; }

        public int TipoUsuario { get; set; }

    }
}
