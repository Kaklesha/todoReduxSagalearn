export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("http://localhost:3000/users");
  if (!response.ok) {
    throw new Error("isn't ok");
  }
  return response.json();
};

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
