namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ObejetivosEspecificos
    {


        [Key]
        public int IdObjetivoEsp { get; set; }

        public int IdObjetivoGeneral { get; set; }

        [StringLength(200)]
        public string ObjetivoEsp { get; set; }


    }
}