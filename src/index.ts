// src/index.ts
import express, {Request, Response} from 'express';

const app = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
import usersRouter from './users/users';

// Middleware to parse JSON in the request body
app.use(express.json());

// Use the users route
app.use('/users', usersRouter);
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

