import { use } from 'react';
import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "About page", content: "All post data" },
  ];
}

async function fetchData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) throw new Error('something went wrong..');
  return response.json();
}

const getData = fetchData();

export interface Root {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const About = () => {
  const datas = use(getData);
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-center font-bold text-2xl text-blue-500 mb-6">
        About
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.slice(0, 20).map((post: Root) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
