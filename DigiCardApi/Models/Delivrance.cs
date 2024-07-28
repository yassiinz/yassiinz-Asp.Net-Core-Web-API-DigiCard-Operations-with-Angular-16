using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

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

        [DataType(DataType.CreditCard)]
        public long NumDeCarte { get; set; }

        public int NumCin { get; set; }

        [Column(TypeName = "DateTime2")]
        public DateTime DateDeNaissance { get; set; }

        [DataType(DataType.PhoneNumber)]
        public int GSM { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }
}
