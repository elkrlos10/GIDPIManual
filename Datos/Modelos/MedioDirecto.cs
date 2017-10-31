namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("MedioDirecto")]
    public partial class MedioDirecto
    {
    

        [Key]
        public int IdMedio { get; set; }

        public int IdArbolObj { get; set; }

        public string MedioDirecto1 { get; set; }

    }
}
