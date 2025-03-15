import express, { Request, Response } from 'express';
import cors from 'cors';

//import { User } from './types/User';

const app = express();
const PORT = 3000;

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

// Пример данных
const users: User[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
];

// Endpoint для получения пользователей
app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

app.use(cors());
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});