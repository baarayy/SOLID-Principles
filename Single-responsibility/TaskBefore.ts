class TaskBefore {
  private title: string;
  private description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  // Function to save the task to a database
  saveToDatabase() {
    // Save logic here...
    console.log("Task saved to the database.");
  }

  // Function to format task details for display
  formatForDisplay() {
    return `Title: ${this.title}\nDescription: ${this.description}`;
  }
}
const taskBefore = new TaskBefore("Complete Assignment", "Finish by end of the day");
taskBefore.saveToDatabase();
console.log(taskBefore.formatForDisplay());
