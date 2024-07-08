using TaskManagerAPI.DTOs;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Services.Interfaces
{
    public interface ITaskService
    {
        Task<IEnumerable<TaskItem>> GetTasksAsync();
        Task<TaskItem> GetTaskByIdAsync(Guid id);
        Task AddTaskAsync(TaskDto taskDto);
        Task UpdateTaskAsync(Guid id, TaskDto taskDto);
        Task DeleteTaskAsync(Guid id);
    }
}
