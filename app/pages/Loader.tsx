export async function loader() {
  return { data: 'https://jsonplaceholder.typicode.com/users' };
}

const Loader = () => {
  return (
    <div>
      <h1>Loader Data</h1>
    </div>
  );
};

export default Loader;
