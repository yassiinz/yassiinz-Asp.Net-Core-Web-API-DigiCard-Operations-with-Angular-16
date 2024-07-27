using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CardAPI.Models
{
    public class CardRequest
    {
        [Key]
        public int Id { get; set; }

        public int NumberOfCards { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Comment { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string Status { get; set; } = "";
        public bool CGU { get; set; }    
    }
}
