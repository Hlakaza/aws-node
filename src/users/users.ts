import express, { Request, Response } from 'express';
import {User} from "./users.interface";
const router = express.Router();


const users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Alice Johnson' },
];

// Endpoint to get a list of users
router.get('/', (req: Request, res: Response) => {
    res.json(users);
});

export default router;