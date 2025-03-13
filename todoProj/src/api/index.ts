
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const fetchUsers = (): Promise<unknown> => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => console.log(response))

};