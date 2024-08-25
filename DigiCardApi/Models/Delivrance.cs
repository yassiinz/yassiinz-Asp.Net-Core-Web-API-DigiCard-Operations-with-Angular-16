using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace CardAPI.Models
{
    public class Delivrance
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Nom { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string Prenom { get; set; } = "";

        public long NumDeCarte { get; set; }

        public int NumCin { get; set; }

        [Column(TypeName= "DateTime2")]
        public DateTime DateDeNaissance { get; set; }


        public int GSM { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }


        [Column(TypeName = "nvarchar(100)")]
        public string Status { get; set; } = "";

    }
}
