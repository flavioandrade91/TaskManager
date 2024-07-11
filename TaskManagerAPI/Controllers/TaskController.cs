using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TaskManagerAPI.DTOs;
using TaskManagerAPI.Models;
using TaskManagerAPI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskManagerAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TaskItem>> GetTask(Guid id)
        {
            var task = await _taskService.GetTaskByIdAsync(id);
            if (task == null)
            {
                return NotFound();
            }
            return Ok(task);
        }

        [HttpPatch("{id}/status")]
        public async Task<IActionResult> UpdateTaskStatus(Guid id, [FromBody] UpdateTaskStatusDto statusDto)
        {
            await _taskService.UpdateTaskStatusAsync(id, statusDto.IsCompleted);
            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult> GetTasks([FromQuery] int pageNumber = 1, [FromQuery] int pageSize = 4)
        {
            var tasks = await _taskService.GetTasksAsync(pageNumber, pageSize);
            var totalCount = await _taskService.GetTotalTaskCountAsync();
            return Ok(new { tasks, totalCount });
        }

        [HttpPost]
        public async Task<ActionResult> AddTask(TaskDto taskDto)
        {
            var taskId = await _taskService.AddTaskAsync(taskDto);
            return CreatedAtAction(nameof(GetTask), new { id = taskId }, taskDto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateTask(Guid id, TaskDto taskDto)
        {
            await _taskService.UpdateTaskAsync(id, taskDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTask(Guid id)
        {
            await _taskService.DeleteTaskAsync(id);
            return NoContent();
        }
    }
}
