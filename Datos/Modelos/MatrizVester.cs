namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("MatrizVester")]
    public partial class MatrizVester
    {
   

        [Key]
        public int IdMatriz { get; set; }

        public int IdProyecto { get; set; }

        public string ProblemaGeneral { get; set; }


    }
}
