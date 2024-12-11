import type { Route } from '../+types/root';

export async function clientLoader() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todo = await res.json();
  return todo;
}

interface Todo {
  id: number;
  title: string;
}

const ClientLoader = ({ loaderData }: { loaderData: Todo[] }) => {
  return (
    <div>
      <h1>ClientData</h1>
      <div>
        {loaderData.map((todo) => (
          <div>
            <h1>{todo.id}</h1>
            <h1>{todo.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLoader;
