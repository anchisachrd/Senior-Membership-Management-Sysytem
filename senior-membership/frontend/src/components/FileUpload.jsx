import React, { useState, useEffect } from "react";
import { LuFile } from "react-icons/lu";
import { FiEye } from "react-icons/fi";

const FileUpload = ({ label, name, value, onChange, error, touched }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  // Generate preview URL for the file
  useEffect(() => {
    if (value) {
      const url = URL.createObjectURL(value);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url); // Cleanup when component unmounts
    } else {
      setPreviewUrl(null);
    }
  }, [value]);

  const handlePreview = (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (previewUrl) {
      window.open(previewUrl, "_blank", "noopener,noreferrer"); // Open in a new tab/window
    } else {
      alert("Preview not available for this file.");
    }
  };

  return (
    <div className="mt-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        onChange={onChange}
        className={`bg-light ${
          error && touched ? "bg-red-100" : "border border-gray-400"
        } text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500`}
      />
      {value && (
        <div className="mt-2 flex items-center justify-between bg-gray-100 border border-gray-300 rounded-md p-2 w-full">
          <div className="flex items-center space-x-2">
            <LuFile className="text-gray-700 h-5 w-5" />
            <span className="text-md text-gray-700">{value.name}</span>
          </div>

          {/* Eye Icon: Open preview in a new window */}
          <a
            href="#"
            onClick={handlePreview}
            className="text-gray-600 hover:text-gray-900 ml-auto"
          >
            <FiEye className=" text-blue-500 h-5 w-5" />
          </a>
        </div>
      )}
      {error && touched && (
        <div className="text-red-600 text-sm mt-1">{error}</div>
      )}
    </div>
  );
};

export default FileUpload;
