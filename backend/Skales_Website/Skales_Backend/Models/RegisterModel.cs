using System.ComponentModel.DataAnnotations;

namespace Skales_Backend.Models
{
    public class RegisterModel
    {
        [Key]
        public int ID {  get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(6)]
        public string Password { get; set; }
    }
}



