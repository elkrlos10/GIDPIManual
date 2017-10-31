namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class FinesDirectos
    {
       

        [Key]
        public int IdFin { get; set; }

        public int IdArbolObj { get; set; }

        public string FinDirecto { get; set; }

   
    }
}
