import Express, { Request, Response } from "express";
import { Query } from "express-serve-static-core";

import cors from "cors";

//import { User } from './types/User';
export interface TypedRequestQuery<T extends Query> extends Express.Request {
  body: T;
}
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
const app = Express();
app.use(Express.urlencoded({ extended: true }));
const PORT = 3000;

//mock data for MVP
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
//mock data for MVP
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

function createNewTask(
  tasks: Task[],
  nameTask: string,
  descriptionTask: string = ""
) {
  const lastIDlastTask = tasks.at(-1)?.id;
  const currentIDlastTask = lastIDlastTask
    ? lastIDlastTask + 1
    : (() => {
        throw new Error("Error when getting last ID of the tasks");
      })();

  tasks.push({
    id: currentIDlastTask,
    name: nameTask,
    description: descriptionTask,
  });
  return currentIDlastTask;
  //else throw new Error("Error pushing new task to the tasks");
}

app.post(
  "/tasks",
  function (
    req: TypedRequestQuery<{ name: string; description?: string }>,
    res: Express.Response
  ) {
    const currentIDlastTask = createNewTask(tasks, req.body.name, req.body.description);
    res.status(200).json({ id: currentIDlastTask });
    // res.status(500).send('Something broke!')
  }
);

app.use(cors());
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
