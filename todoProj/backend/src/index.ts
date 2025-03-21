import express, { Request, Response } from "express";
import cors from "cors";

//import { User } from './types/User';

const app = express();
const PORT = 3000;

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
export interface Task {
  id: number;
  name: string;
  description?: string;
}
// Пример данных
const users: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
];

const tasks: Task[] = [
  { id: 1, name: "cut a stuck", description: "take saw for it" },
  { id: 2, name: "wash teeth", description: "buy mouth cream" },
];

// Endpoint для получения пользователей
app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});
app.get("/tasks", (req: Request, res: Response) => {
  res.json(tasks);
});

app.use(cors());
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
