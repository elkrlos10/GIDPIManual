namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ArbolProblema")]
    public partial class ArbolProblema
    {
       

        [Key]
        public int IdArbolProblema { get; set; }

        public int IdProyecto { get; set; }


        public string ProblemaCentral { get; set; }

        public byte[] Imagen { get; set; }
 
    }
}
