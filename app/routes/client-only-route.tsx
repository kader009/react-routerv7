export function HydrateFallback() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-blue-700">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-medium">Loading, please wait...</p>
    </div>
  );
}
