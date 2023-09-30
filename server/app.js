import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; // Import mongoose

import router from './routes/taskRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://samuelwarang:9822084607@cluster0.2f5hqr9.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect( uri , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection; // Define the connection object

connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/tasks', router);

export default app;
