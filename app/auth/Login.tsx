const Login = () => {
  return (
    <form className="flex flex-col space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default Login;
