import { type LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { authCookie } from "~/utils/auth"; // Fake module for handling cookies

export const loader = async ({ request }: LoaderFunctionArgs) => {
  let cookieString = request.headers.get("Cookie");
  // cookieString = null;
  const userId = await authCookie.parse(cookieString);

  if (userId) {
    throw redirect("/dashboard");
  }

  return json(null);
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">OrdinAI</h1>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Signup
        </button>
      </div>
    </div>
  );
}
