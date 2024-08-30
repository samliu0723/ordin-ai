import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

// Simulated async data fetching function
const getFiles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Document 1",
          type: ".pdf",
          metadata: "2 MB · Last modified: 2024-08-26",
          tags: ["important", "work"],
        },
        {
          id: 2,
          name: "Meeting Notes",
          type: ".md",
          metadata: "500 KB · Last modified: 2024-08-25",
          tags: ["meeting", "notes"],
        },
        // Add more files here
      ]);
    }, 500); // Simulate a delay of 500ms
  });
};

// Loader function to fetch files
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const files = await getFiles();
  return json({ files });
};

export default function Files() {
  const { files } = useLoaderData<typeof loader>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Files</h1>
      <ul className="divide-y divide-gray-100">
        {files.map((file) => (
          <li key={file.id} className="flex justify-between gap-x-6 py-5">
            <Link
              to={`/files/${file.id}`}
              className="flex min-w-0 gap-x-4 hover:bg-gray-50 p-2 rounded"
            >
              <div className="h-12 w-12 flex-none rounded bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-bold">{file.type}</span>
              </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {file.name}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {file.metadata}
                </p>
              </div>
            </Link>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">Tags:</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {file.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
