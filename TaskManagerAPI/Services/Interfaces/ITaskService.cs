using TaskManagerAPI.DTOs;
using TaskManagerAPI.Models;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;

namespace TaskManagerAPI.Services.Interfaces
{
    public interface ITaskService
    {
        Task<IEnumerable<TaskItem>> GetTasksAsync(int pageNumber, int pageSize);
        Task<int> GetTotalTaskCountAsync();
        Task<TaskItem> GetTaskByIdAsync(Guid id);
        Task<Guid> AddTaskAsync(TaskDto taskDto);
        Task UpdateTaskAsync(Guid id, TaskDto taskDto);
        Task UpdateTaskStatusAsync(Guid id, bool isCompleted);
        Task DeleteTaskAsync(Guid id);
    }
}
