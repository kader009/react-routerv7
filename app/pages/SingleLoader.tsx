import { Link } from 'react-router';

export async function loader({ params }: { params: { singleId: string } }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.singleId}`
  );
  if (!response.ok) throw new Error('Something went wrong...');
  const data = await response.json();
  return { data: data };
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const SingleLoader = ({ loaderData }: { loaderData: { data: User } }) => {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{loaderData.data.name}</h1>
        <p>Email: {loaderData.data.email}</p>
        <p>Phone: {loaderData.data.phone}</p>
        <p>Website: {loaderData.data.website}</p>
        <Link to="/loader" className="text-blue-500 mt-4 block">
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default SingleLoader;
