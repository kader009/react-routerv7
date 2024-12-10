import { Outlet } from 'react-router';

const Authlayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Authlayout;
