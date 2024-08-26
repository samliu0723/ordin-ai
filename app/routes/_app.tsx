import { redirect, json, type LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { authCookie } from "~/utils/auth"; // Fake module for handling cookies

export const loader = async ({ request }: LoaderFunctionArgs) => {
  let cookieString = request.headers.get("Cookie");
  // cookieString = null;
  const userId = await authCookie.parse(cookieString);

  if (!userId) {
    // Redirect to the index page if the user is not logged in
    throw redirect("/");
  }

  return json(null);
};

export default function AppLayout() {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-xl font-bold">OrdinAI</div>
        <nav className="flex flex-col space-y-4 mt-8">
          <a href="/dashboard" className="px-4 py-2 hover:bg-gray-700">
            Dashboard
          </a>
          <a href="/files" className="px-4 py-2 hover:bg-gray-700">
            Files
          </a>
          <a href="/settings" className="px-4 py-2 hover:bg-gray-700">
            Settings
          </a>
          <a href="/team" className="px-4 py-2 hover:bg-gray-700">
            Team
          </a>
          <a href="/tasks" className="px-4 py-2 hover:bg-gray-700">
            Tasks
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
