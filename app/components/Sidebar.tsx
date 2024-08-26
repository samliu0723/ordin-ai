export function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white">
      <div className="p-4 text-2xl font-bold">OrdinAI</div>
      <nav className="mt-10">
        <a href="/dashboard" className="block py-2.5 px-4 hover:bg-gray-700">
          Dashboard
        </a>
        <a href="/upload" className="block py-2.5 px-4 hover:bg-gray-700">
          Upload Documents
        </a>
        <a href="/search" className="block py-2.5 px-4 hover:bg-gray-700">
          Search
        </a>
        <a href="/files" className="block py-2.5 px-4 hover:bg-gray-700">
          My Files
        </a>
        <a href="/team" className="block py-2.5 px-4 hover:bg-gray-700">
          Team Management
        </a>
        <a href="/settings" className="block py-2.5 px-4 hover:bg-gray-700">
          Settings
        </a>
      </nav>
      <div className="absolute bottom-0 w-full p-4">
        <a href="/logout" className="block py-2.5 px-4 bg-red-600 text-center">
          Logout
        </a>
      </div>
    </div>
  );
}
