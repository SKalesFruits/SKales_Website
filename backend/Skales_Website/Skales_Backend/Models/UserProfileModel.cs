using System.ComponentModel.DataAnnotations;

namespace Skales_Backend.Models
{
    public class UserProfileModel
    {
        public int ID { get; set; }

        public string UserID { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }

        public string MobileNumber { get; set; }

        public string Mailbox { get; set; }

        public string ProfilePictureURL { get; set; }
    }
}
