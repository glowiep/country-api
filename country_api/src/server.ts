import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const PORT = process.env.PORT || 3001;
const app = express();

app.set('view engine', 'ejs');

// Use Morgan for logging HTTP requests in development mode
app.use(morgan('dev'));
app.use(cors());

// For parsing body of request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ msg: 'API Home' });
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));