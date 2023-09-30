import mongoose from 'mongoose';

// Define the Task schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

// Create a Task model based on the schema
const Task = mongoose.model('Task', taskSchema);

export default Task;
