// components/PDFViewer.jsx

export default function PDFViewer({ fileUrl }) {
  return (
    <div style={{ height: "480px", border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden" }}>
      <iframe
        src={fileUrl}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="PDF Preview"
      ></iframe>
    </div>
  );
}
