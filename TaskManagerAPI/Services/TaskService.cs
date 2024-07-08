using TaskManagerAPI.DTOs;
using TaskManagerAPI.Models;
using TaskManagerAPI.Repositories.Interfaces;
using TaskManagerAPI.Services.Interfaces;

namespace TaskManagerAPI.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepository;

        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public async Task<IEnumerable<TaskItem>> GetTasksAsync()
        {
            return await _taskRepository.GetTasksAsync();
        }

        public async Task<TaskItem> GetTaskByIdAsync(Guid id)
        {
            return await _taskRepository.GetTaskByIdAsync(id);
        }

        public async Task AddTaskAsync(TaskDto taskDto)
        {
            var task = new TaskItem
            {
                Id = Guid.NewGuid(),
                Title = taskDto.Title,
                Description = taskDto.Description,
                IsCompleted = false,
                CreatedAt = DateTime.UtcNow,
                LastUpdatedDate = DateTime.UtcNow
            };
            await _taskRepository.AddTaskAsync(task);
        }

        public async Task UpdateTaskAsync(Guid id, TaskDto taskDto)
        {
            var task = await _taskRepository.GetTaskByIdAsync(id);
            if (task != null)
            {
                task.Title = taskDto.Title;
                task.Description = taskDto.Description;
                task.IsCompleted = taskDto.IsCompleted;
                task.LastUpdatedDate = DateTime.UtcNow;

                await _taskRepository.UpdateTaskAsync(task);
            }
        }

        public async Task DeleteTaskAsync(Guid id)
        {
            await _taskRepository.DeleteTaskAsync(id);
        }
    }
}
