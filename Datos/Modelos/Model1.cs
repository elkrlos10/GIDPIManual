namespace Datos.Modelos
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model1")
        {
        }

        public virtual DbSet<ArbolObjetivos> ArbolObjetivos { get; set; }
        public virtual DbSet<ArbolProblema> ArbolProblema { get; set; }
        public virtual DbSet<CausaDirecta> CausaDirecta { get; set; }
        public virtual DbSet<CausaIndirecta> CausaIndirecta { get; set; }
        public virtual DbSet<Departamento> Departamento { get; set; }
        public virtual DbSet<DetalleMatriz> DetalleMatriz { get; set; }
        public virtual DbSet<EfectoDirecto> EfectoDirecto { get; set; }
        public virtual DbSet<EfectoIndirecto> EfectoIndirecto { get; set; }
        public virtual DbSet<FinesDirectos> FinesDirectos { get; set; }
        public virtual DbSet<FinesIndirectos> FinesIndirectos { get; set; }
        public virtual DbSet<MatrizVester> MatrizVester { get; set; }
        public virtual DbSet<MedioDirecto> MedioDirecto { get; set; }
        public virtual DbSet<MediosIndirectos> MediosIndirectos { get; set; }
        public virtual DbSet<Municipio> Municipio { get; set; }
        public virtual DbSet<ObejetivosEspecificos> ObejetivosEspecificos { get; set; }
        public virtual DbSet<ObjetivoGeneral> ObjetivoGeneral { get; set; }
        public virtual DbSet<PersonaJuridica> PersonaJuridica { get; set; }
        public virtual DbSet<PersonaNatural> PersonaNatural { get; set; }
        public virtual DbSet<Proyecto> Proyecto { get; set; }
        public virtual DbSet<Resultados> Resultados { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
        public virtual DbSet<Involucrados> Involucrados { get; set; }
        public virtual DbSet<PerfilProyecto> PerfilProyecto { get; set; }
        public virtual DbSet<Perfil2> Perfil2 { get; set; }
        public virtual DbSet<Cronograma> Cronograma { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        //    modelBuilder.Entity<ArbolObjetivos>()
        //        .Property(e => e.ObjetivoCentral)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<ArbolObjetivos>()
        //        .HasMany(e => e.FinesDirectos)
        //        .WithRequired(e => e.ArbolObjetivos)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<ArbolObjetivos>()
        //        .HasMany(e => e.MedioDirecto)
        //        .WithRequired(e => e.ArbolObjetivos)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<ArbolProblema>()
        //        .Property(e => e.ProblemaCentral)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<CausaDirecta>()
        //        .Property(e => e.Causa)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<CausaDirecta>()
        //        .HasMany(e => e.CausaIndirecta)
        //        .WithRequired(e => e.CausaDirecta)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<CausaIndirecta>()
        //        .Property(e => e.CausaIndirecta1)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Departamento>()
        //        .Property(e => e.NombreDepartamento)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Departamento>()
        //        .HasMany(e => e.Municipio)
        //        .WithRequired(e => e.Departamento)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema1)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema2)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema3)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema4)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema5)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema6)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema7)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema8)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema9)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema10)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema11)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema12)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema13)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema14)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema15)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema16)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema17)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema18)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema19)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema20)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema21)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema22)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema23)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema24)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<DetalleMatriz>()
        //        .Property(e => e.Problema25)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<EfectoDirecto>()
        //        .Property(e => e.Efecto)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<EfectoDirecto>()
        //        .HasMany(e => e.EfectoIndirecto)
        //        .WithRequired(e => e.EfectoDirecto)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<EfectoIndirecto>()
        //        .Property(e => e.EfectoIndirecto1)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<FinesDirectos>()
        //        .Property(e => e.FinDirecto)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<FinesDirectos>()
        //        .HasMany(e => e.FinesIndirectos)
        //        .WithRequired(e => e.FinesDirectos)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<FinesIndirectos>()
        //        .Property(e => e.FinIndirecto)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<MatrizVester>()
        //        .HasMany(e => e.DetalleMatriz)
        //        .WithRequired(e => e.MatrizVester)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<MedioDirecto>()
        //        .Property(e => e.MedioDirecto1)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<MedioDirecto>()
        //        .HasMany(e => e.MediosIndirectos)
        //        .WithRequired(e => e.MedioDirecto)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<MediosIndirectos>()
        //        .Property(e => e.MedioIndirecto)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Municipio>()
        //        .Property(e => e.NombreMunicipio)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Municipio>()
        //        .HasMany(e => e.Proyecto)
        //        .WithRequired(e => e.Municipio)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<ObejetivosEspecificos>()
        //        .Property(e => e.ObjetivoEsp)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<ObejetivosEspecificos>()
        //        .HasMany(e => e.Resultados)
        //        .WithRequired(e => e.ObejetivosEspecificos)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<ObjetivoGeneral>()
        //        .Property(e => e.ObjetivoCentral)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<ObjetivoGeneral>()
        //        .HasMany(e => e.ObejetivosEspecificos)
        //        .WithRequired(e => e.ObjetivoGeneral)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<PersonaJuridica>()
        //        .Property(e => e.NIt)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<PersonaJuridica>()
        //        .Property(e => e.SectorEconomico)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<PersonaJuridica>()
        //        .Property(e => e.Responsable)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<PersonaJuridica>()
        //        .Property(e => e.Email)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<PersonaJuridica>()
        //        .Property(e => e.Telefono)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<PersonaNatural>()
        //        .Property(e => e.Nombres)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<PersonaNatural>()
        //        .Property(e => e.Apellidos)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<PersonaNatural>()
        //        .Property(e => e.Documento)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<PersonaNatural>()
        //        .Property(e => e.Email)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<PersonaNatural>()
        //        .Property(e => e.Telefono)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Proyecto>()
        //        .Property(e => e.TipoProyecto)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Proyecto>()
        //        .Property(e => e.AccionProyecto)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Proyecto>()
        //        .Property(e => e.Sector)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Proyecto>()
        //        .HasMany(e => e.ArbolObjetivos)
        //        .WithRequired(e => e.Proyecto)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<Proyecto>()
        //        .HasMany(e => e.ArbolProblema)
        //        .WithRequired(e => e.Proyecto)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<Proyecto>()
        //        .HasMany(e => e.MatrizVester)
        //        .WithRequired(e => e.Proyecto)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<Proyecto>()
        //        .HasMany(e => e.ObjetivoGeneral)
        //        .WithRequired(e => e.Proyecto)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<Resultados>()
        //        .Property(e => e.Resultado)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Resultados>()
        //        .Property(e => e.MedidaResultado)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Resultados>()
        //        .Property(e => e.HerramientaResultado)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Resultados>()
        //        .Property(e => e.ProductoResultado)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Usuario>()
        //        .Property(e => e.Usuario1)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Usuario>()
        //        .Property(e => e.Contraseña)
        //        .IsUnicode(false);

        //    modelBuilder.Entity<Usuario>()
        //        .HasMany(e => e.PersonaJuridica)
        //        .WithRequired(e => e.Usuario)
        //        .WillCascadeOnDelete(false);

        //    modelBuilder.Entity<Usuario>()
        //        .HasMany(e => e.PersonaNatural)
        //        .WithRequired(e => e.Usuario)
        //        .WillCascadeOnDelete(false);
        }
    }
}
