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
