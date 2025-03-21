import Express, { Request, Response } from "express";
import cors from "cors";

//import { User } from './types/User';

const app = Express();
app.use(Express.urlencoded({ extended: true }));
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
// export interface TypedRequestBody<T> extends Express.Request {
//   body: T
// }

import { Query } from 'express-serve-static-core';

export interface TypedRequestQuery<T extends Query> extends Express.Request {

     body: T

}


app.post(
  "/tasks",
  function (
    req: TypedRequestQuery<{ username: string, password: string }>,
    res: Express.Response
  ) {
    const success = req.body.username === "foo" && req.body.password === "bar";
    
    res.status(200).json({ Success: success });
   // res.status(500).send('Something broke!')
  }
);

app.use(cors());
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
