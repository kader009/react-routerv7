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
    <div>
      <h1 className="text-center text-blue-700 font-semibold">Loader Data</h1>
      <div>
        {loaderData.data.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
