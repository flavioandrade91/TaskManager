using System.Security.Cryptography;

namespace TaskManagerAPI.Services
{
    public class KeyGeneratorService
    {
        public static string GenerateSecureKey()
        {
            var key = new byte[16]; // 128 bits
            using (var generator = RandomNumberGenerator.Create())
            {
                generator.GetBytes(key);
            }
            return Convert.ToBase64String(key);
        }
    }
}
