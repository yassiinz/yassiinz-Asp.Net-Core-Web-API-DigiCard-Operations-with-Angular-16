using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CardAPI.Models
{
    public class Companies
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CompanyName { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string AccountLabel { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string AccountNumber { get; set; } = "";
    }
}
