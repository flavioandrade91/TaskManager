using TaskManagerAPI.Models;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;

namespace TaskManagerAPI.Repositories.Interfaces
{
    public interface ITaskRepository
    {
        Task<IEnumerable<TaskItem>> GetTasksAsync(int pageNumber, int pageSize);
        Task<int> GetTotalTaskCountAsync();
        Task<TaskItem> GetTaskByIdAsync(Guid id);
        Task AddTaskAsync(TaskItem task);
        Task UpdateTaskAsync(TaskItem task);
        Task DeleteTaskAsync(Guid id);
    }
}
