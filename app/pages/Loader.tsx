export async function loader() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!response.ok) throw new Error('something went wrong..');
  const data = await response.json();
  return { data: data };
}

const Loader = ({ loaderData }: { loaderData: { data: string[] } }) => {
  console.log(loaderData.data);
  return (
    <div>
      <h1>Loader Data</h1>
    </div>
  );
};

export default Loader;
