import React, { useState } from "react";
import "../css/App.css"; // File CSS untuk styling
// import Preview from "./Preview"; // Komponen untuk melihat hasil

function HtmlGenerator() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [htmlCode, setHtmlCode] = useState("");

  const generateHtml = () => {
    const newHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
          <style>
              body { font-family: sans-serif; line-height: 1.6; padding: 20px; }
              h1 { color: #333; }
              p { color: #555; }
          </style>
      </head>
      <body>
          <h1>${title}</h1>
          <p>${content}</p>
      </body>
      </html>
    `;
    setHtmlCode(newHtml);
  };

  const downloadHtml = () => {
    const element = document.createElement("a");
    const file = new Blob([htmlCode], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "generated-page.html";
    document.body.appendChild(element); // Diperlukan untuk Firefox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container">
      <div className="input-section">
        <h2>Input Konten</h2>
        <input
          type="text"
          placeholder="Judul Halaman"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Isi konten (paragraf, dll.)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={generateHtml}>Buat HTML</button>
      </div>

      <div className="preview-section">
        <h2>Pratinjau & Kode HTML</h2>
        {htmlCode && (
          <>
            <div className="preview-window">
              <Preview htmlContent={htmlCode} />
            </div>
            <pre className="code-block">
              <code>{htmlCode}</code>
            </pre>
            <button onClick={downloadHtml}>Unduh File HTML</button>
          </>
        )}
      </div>
    </div>
  );
}

const Preview = ({ htmlContent }) => {
  return (
    <iframe
      title="HTML Preview"
      style={{ width: "100%", height: "400px", border: "1px solid #ccc" }}
      srcDoc={htmlContent}
    />
  );
};

export default HtmlGenerator;
