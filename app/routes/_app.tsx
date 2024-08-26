import { Outlet, NavLink } from "@remix-run/react";
import { type LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { authCookie } from "~/utils/auth";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  let cookieString = request.headers.get("Cookie");
  // cookieString = null;
  const userId = await authCookie.parse(cookieString);

  if (!userId) {
    throw redirect("/");
  }

  return json(null);
};
export default function AppLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-center text-2xl font-bold">OrdinAI</div>
        <nav className="flex-1">
          <ul className="space-y-2 p-4">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `block p-2 rounded ${isActive ? "bg-gray-700" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/files"
                className={({ isActive }) =>
                  `block p-2 rounded ${isActive ? "bg-gray-700" : ""}`
                }
              >
                Files
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  `block p-2 rounded ${isActive ? "bg-gray-700" : ""}`
                }
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `block p-2 rounded ${isActive ? "bg-gray-700" : ""}`
                }
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `block p-2 rounded ${isActive ? "bg-gray-700" : ""}`
                }
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
