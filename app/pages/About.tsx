import { use } from "react";

async function fetchData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  console.log(data);
}

const getData = fetchData()

const About = () => {
  const data = use(getData)
  return (
    <div>
      <h1 className="text-center font-semibold">About</h1>
    </div>
  );
};

export default About;
