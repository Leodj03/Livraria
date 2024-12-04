import express from 'express';
import pool from './config/database';
import bookRoutes from './routes/bookRoutes';
import authRoutes from './routes/authRoutes';;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

app.use ('/books', bookRoutes)
app.use ('/users', authRoutes)