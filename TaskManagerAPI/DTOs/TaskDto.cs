using System.ComponentModel.DataAnnotations;

namespace TaskManagerAPI.DTOs
{
    public class TaskDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
        //public DateTime CreatedAt { get; set; }
        //public DateTime LastUpdatedDate { get; set; }
    }
}
