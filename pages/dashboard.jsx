import { useEffect, useState } from "react";
import { fetchResumeHistory, deleteResume } from "../utils/api";
import PDFViewer from "@/components/PDFViewer";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  const [resumes, setResumes] = useState([]);

  const handleDelete = async (fileName) => {
    if (!window.confirm("Are you sure you want to delete this resume?")) return;
    try {
      await deleteResume(fileName);
      setResumes((prev) => prev.filter((r) => r.fileName !== fileName));
    } catch (err) {
      alert("Failed to delete resume");
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchResumeHistory();
        setResumes(data);
      } catch (err) {
        console.error("Error loading resumes:", err.message);
      }
    };
    load();
  }, []);

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto p-6 mt-10 font-sans">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          📁 Resume Dashboard
        </h2>

        {resumes.length === 0 ? (
          <p className="text-gray-500 text-base">No resume history yet.</p>
        ) : (
          <ul className="space-y-6">
            {resumes.map((resume, index) => (
              <li
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    📄 {resume.fileName}
                  </h3>
                </div>

                <p className="text-sm text-gray-600">
                  <em>Matched Role:</em>{" "}
                  <span className="text-blue-600 font-medium">
                    {resume.matchedJob?.title || "No suitable match"}
                  </span>
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Uploaded on:{" "}
                  {new Date(resume.createdAt).toLocaleString()}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <a
                    href={`http://localhost:5000/file/${encodeURIComponent(resume.fileName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    🔗 View Full PDF
                  </a>

                  <a
                    href={`http://localhost:5000/file/${encodeURIComponent(resume.fileName)}`}
                    download
                    className="text-green-600 font-medium hover:underline"
                  >
                    ⬇️ Download PDF
                  </a>

                  <button
                    onClick={() => handleDelete(resume.fileName)}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1.5 px-4 rounded-md transition-all"
                  >
                    🗑️ Delete
                  </button>
                </div>

                <div className="mt-4 border border-gray-200 rounded-md bg-gray-50 p-4">
                  <PDFViewer
                    fileUrl={`http://localhost:5000/file/${encodeURIComponent(resume.fileName)}`}
                    singlePageOnly={true}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </ProtectedRoute>
  );
}
