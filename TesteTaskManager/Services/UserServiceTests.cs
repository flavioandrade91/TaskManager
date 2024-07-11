using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using TaskManagerAPI.DTOs;
using TaskManagerAPI.Models;
using TaskManagerAPI.Repositories;
using TaskManagerAPI.Services;
using System.Threading.Tasks;
using TaskManagerAPI.Repositories.Interfaces;
using TaskManagerAPI.Services.Interfaces;

namespace TaskManagerAPI.Tests.Services
{
    [TestClass]
    public class UserServiceTests
    {
        private Mock<IUserRepository> _userRepositoryMock;
        private IUserService _userService;

        [TestInitialize]
        public void Setup()
        {
            _userRepositoryMock = new Mock<IUserRepository>();
            _userService = new UserService(_userRepositoryMock.Object);
        }

        [TestMethod]
        public async Task RegisterUserAsync_ShouldReturnFalse_WhenUserAlreadyExists()
        {
            var userDto = new UserDto { Email = "existinguser@example.com", PasswordHash = "password" };
            _userRepositoryMock.Setup(repo => repo.GetUserByEmailAsync(userDto.Email)).ReturnsAsync(new User());

            var result = await _userService.RegisterUserAsync(userDto);

            Assert.IsFalse(result);
        }

        [TestMethod]
        public async Task RegisterUserAsync_ShouldReturnTrue_WhenUserDoesNotExist()
        {
            var userDto = new UserDto { Email = "newuser@example.com", PasswordHash = "password" };
            _userRepositoryMock.Setup(repo => repo.GetUserByEmailAsync(userDto.Email)).ReturnsAsync((User)null);

            var result = await _userService.RegisterUserAsync(userDto);

            Assert.IsTrue(result);
        }

        [TestMethod]
        public async Task RegisterUserAsync_ShouldReturnFalse_WhenRequiredFieldsAreMissing()
        {
            var userDto = new UserDto { Email = "", PasswordHash = "" };
            _userRepositoryMock.Setup(repo => repo.GetUserByEmailAsync(userDto.Email)).ReturnsAsync((User)null);

            var result = await _userService.RegisterUserAsync(userDto);

            Assert.IsFalse(result);
        }

        [TestMethod]
        public async Task AuthenticateUserAsync_ShouldReturnNull_WhenUserDoesNotExist()
        {
            var loginDto = new LoginDto { Email = "nonexistentuser@example.com", Password = "password" };
            _userRepositoryMock.Setup(repo => repo.GetUserByEmailAsync(loginDto.Email)).ReturnsAsync((User)null);

            var result = await _userService.AuthenticateUserAsync(loginDto);

            Assert.IsNull(result);
        }

        [TestMethod]
        public async Task AuthenticateUserAsync_ShouldReturnUser_WhenCredentialsAreValid()
        {
            var loginDto = new LoginDto { Email = "validuser@example.com", Password = "password" };
            var user = new User { Email = "validuser@example.com", PasswordHash = BCrypt.Net.BCrypt.HashPassword("password") };
            _userRepositoryMock.Setup(repo => repo.GetUserByEmailAsync(loginDto.Email)).ReturnsAsync(user);

            var result = await _userService.AuthenticateUserAsync(loginDto);

            Assert.IsNotNull(result);
            Assert.AreEqual(user, result);
        }

        [TestMethod]
        public async Task AuthenticateUserAsync_ShouldReturnNull_WhenPasswordIsIncorrect()
        {
            var loginDto = new LoginDto { Email = "validuser@example.com", Password = "wrongpassword" };
            var user = new User { Email = "validuser@example.com", PasswordHash = BCrypt.Net.BCrypt.HashPassword("correctpassword") };
            _userRepositoryMock.Setup(repo => repo.GetUserByEmailAsync(loginDto.Email)).ReturnsAsync(user);

            var result = await _userService.AuthenticateUserAsync(loginDto);

            Assert.IsNull(result);
        }

        [TestMethod]
        public async Task AuthenticateUserAsync_ShouldNotTakeTooLong()
        {
            var loginDto = new LoginDto { Email = "validuser@example.com", Password = "password" };
            var user = new User { Email = "validuser@example.com", PasswordHash = BCrypt.Net.BCrypt.HashPassword("password") };
            _userRepositoryMock.Setup(repo => repo.GetUserByEmailAsync(loginDto.Email)).ReturnsAsync(user);

            var watch = System.Diagnostics.Stopwatch.StartNew();
            var result = await _userService.AuthenticateUserAsync(loginDto);
            watch.Stop();

            Assert.IsNotNull(result);
            Assert.IsTrue(watch.ElapsedMilliseconds < 1000); // Test fails if auth takes more than 1 second
        }
    }
}
