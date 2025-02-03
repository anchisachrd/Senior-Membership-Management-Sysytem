import React from 'react'

function ConfirmModal({
    isOpen,
    title,
    description,
    onConfirm,
    onCancel,
  }) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        {/* Modal container */}
        <div className="relative bg-white rounded-lg shadow-lg w-96 p-6">
          <button 
          onClick={onCancel}
          className="absolute top-3 right-2.5 text-gray-400
                     bg-transparent hover:bg-gray-200 hover:text-gray-900
                     rounded-lg text-sm w-8 h-8 inline-flex
                     justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
           
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <svg
            class="mx-auto mb-4 text-gray-800 w-12 h-12 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          {/* Title */}
          <h2 className="mb-1 text-lg font-bold text-gray-800 dark:text-gray-800 text-center">
            {title}
          </h2>
          {/* Description */}
          <p className="mb-5 text-base font-normal text-gray-800 dark:text-gray-800 text-center">
            {description}
          </p>
          {/* Buttons */}
          <div className="flex justify-center space-x-2">
            <button
              onClick={onConfirm}
              className="text-white  focus:outline-none bg-white rounded-lg border border-lime-200 hover:bg-lime-100 focus:z-10 focus:ring-4 focus:ring-lime-100 dark:focus:ring-lime-600 dark:bg-lime-700 dark:border-lime-500 dark:hover:text-white dark:hover:bg-lime-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              ยืนยัน
            </button>
            <button
              onClick={onCancel}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-red-200 hover:bg-red-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-700 dark:bg-red-800  dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    );
  }

export default ConfirmModal