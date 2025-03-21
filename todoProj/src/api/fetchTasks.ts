export const fetchTask = async (): Promise<Task[]> => {
  const response = await fetch("http://localhost:3000/tasks");
  if (!response.ok) {
    throw new Error("isn't ok");
  }
  return response.json();
};

export interface Task {
  id: number;
  description?: string;
  name: string;
}

export const postTask = async (newTask:Omit<Task,"id">): Promise<{id:number}> => {
const response = await fetch("http://localhost:3000/tasks",{
  method: "POST",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify(newTask),
});
return response.json();
}