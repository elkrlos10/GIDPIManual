namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ArbolObjetivos
    {
      

        [Key]
        public int IdArbolObj { get; set; }

        public int IdProyecto { get; set; }

        [StringLength(100)]
        public string ObjetivoCentral { get; set; }

        public byte[] imagen { get; set; }
    }
}
