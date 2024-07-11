using TaskManagerAPI.DTOs;
using TaskManagerAPI.Models;
using TaskManagerAPI.Repositories.Interfaces;
using TaskManagerAPI.Services.Interfaces;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;

namespace TaskManagerAPI.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepository;

        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public async Task<IEnumerable<TaskItem>> GetTasksAsync(int pageNumber, int pageSize)
        {
            return await _taskRepository.GetTasksAsync(pageNumber, pageSize);
        }

        public async Task<int> GetTotalTaskCountAsync()
        {
            return await _taskRepository.GetTotalTaskCountAsync();
        }

        public async Task<TaskItem> GetTaskByIdAsync(Guid id)
        {
            return await _taskRepository.GetTaskByIdAsync(id);
        }

        public async Task<Guid> AddTaskAsync(TaskDto taskDto)
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
            return task.Id;
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

        public async Task UpdateTaskStatusAsync(Guid id, bool isCompleted)
        {
            var task = await _taskRepository.GetTaskByIdAsync(id);
            if (task != null)
            {
                task.IsCompleted = isCompleted;
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
