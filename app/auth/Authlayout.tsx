import { Outlet } from 'react-router';
import Footer from '~/components/Footer';

const Authlayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Authlayout;
