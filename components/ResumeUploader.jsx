import { useState } from "react";
import axios from "axios";

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [jobResult, setJobResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type !== "application/pdf") {
      setMessage("❌ Only PDF files are allowed.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setMessage("");
    setJobResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("❌ Please select a PDF resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/resume/analyze`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      setMessage("✅ Resume analyzed successfully.");
      setJobResult(res.data.jobMatch);
    } catch (err) {
      console.error(err);
      setMessage("❌ Error analyzing resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-xl border border-gray-200 rounded-2xl max-w-xl w-full mx-auto p-8 mt-10">
      {/* Hide scrollbar CSS */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📄 Upload Your Resume
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-800 border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-500 transition"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>

        {message && (
          <p
            className={`text-center text-sm font-medium ${
              message.includes("❌") ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>

      {/* Wrap jobResult with overflow-auto & hide scrollbar */}
      {jobResult && typeof jobResult === "object" && (
        <div className="mt-8 bg-gray-50 border border-gray-300 rounded-lg p-5 no-scrollbar overflow-auto max-h-64">
          <h3 className="text-lg font-semibold text-green-700 mb-2">🎯 Matched Job:</h3>
          <p className="text-gray-800">
            <strong>Title:</strong> {jobResult.title}
          </p>
          <p className="text-gray-700 mt-1">
            <strong>Description:</strong> {jobResult.description}
          </p>
          <p className="text-gray-600 text-sm mt-2">
            <strong>Matched Skills:</strong> {jobResult.matchedSkills?.join(", ") || "N/A"}
          </p>
        </div>
      )}

      {jobResult === "No suitable job match found" && (
        <p className="mt-6 text-red-500 text-center font-semibold">
          ❌ No suitable job match found.
        </p>
      )}
    </div>
  );
};

export default ResumeUploader;
