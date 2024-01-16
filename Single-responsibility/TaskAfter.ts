class TaskAfter {
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

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }
}

class TaskFormatter {
  // Function to format task details for display
  formatForDisplay(task: TaskAfter) {
    return `Title: ${task.getTitle()}\nDescription: ${task.getDescription()}`;
  }
}

const task = new TaskAfter("Complete Assignment", "Finish by end of the day");
const taskFormatter = new TaskFormatter();

task.saveToDatabase();
console.log(taskFormatter.formatForDisplay(task));
