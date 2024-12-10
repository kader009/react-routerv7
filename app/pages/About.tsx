import { use } from 'react';

async function fetchData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) throw new Error('something went wrong..');
  return response.json();
}

const getData = fetchData();

const About = () => {
  const datas = use(getData);
  return (
    <div>
      <h1 className="text-center font-semibold">About</h1>
      <br />
      {datas.slice(0, 20).map((post) => (
        <div key={post.id}>
          <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
