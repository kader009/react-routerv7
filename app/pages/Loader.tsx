import { Link } from 'react-router';

export async function loader() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!response.ok) throw new Error('something went wrong..');
  const data = await response.json();
  return { data: data };
}

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const Loader = ({ loaderData }: { loaderData: { data: User[] } }) => {
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="text-center text-blue-500 font-semibold text-2xl mb-6">
        Loader Data
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loaderData.data.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h1>{user.name}</h1>
            <h2 className="mb-2">{user.email}</h2>
            <Link to={''}>
              <span className="bg-black text-white rounded p-1">see more</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
