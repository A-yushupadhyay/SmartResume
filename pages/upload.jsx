import ResumeUploader from "@/components/ResumeUploader";
import ProtectedRoute from "@/components/ProtectedRoute";
import Layout from "@/components/Layout"; // ✅ import the Layout

export default function UploadPage() {
  return (
   
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Smart Resume Analyzer</h1>

        <ProtectedRoute>
          <ResumeUploader />
        </ProtectedRoute>
      </div>
  );
}
