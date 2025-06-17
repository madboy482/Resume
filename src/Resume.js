import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#F7F8F9] flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl font-semibold text-[#1D1D1D] mb-6">Nalin Vijayvargiya's Resume</h1>

      {/* Wider PDF Preview (iframe) */}
      <div className="w-full max-w-[1000px] h-[560px] border shadow-lg mb-6">
        <iframe
          src="/Nalin_Resume.pdf"
          title="Resume"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href="/Nalin_Resume.pdf"
        download
        className="px-6 py-3 bg-[#6C25FF] text-white rounded-md text-lg font-medium shadow-md hover:bg-[#5b1fe3] transition"
      >
        Download Resume
      </a>
    </div>
  );
}
