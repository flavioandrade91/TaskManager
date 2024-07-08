using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManagerAPI.DTOs
{
    public class UserDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Jwt { get; set; }
        public DateTime CreatedAt { get; set; }

    }
}
