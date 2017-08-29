namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Municipio")]
    public partial class Municipio
    {
    

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int IdMunicipio { get; set; }

        [Required]
        [StringLength(100)]
        public string NombreMunicipio { get; set; }

        public int IdDepartamento { get; set; }

        public virtual Departamento Departamento { get; set; }

       
    }
}
