import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    year: "",
    email: "",
    contact: "",
    transactionId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full rounded-xl p-8 bg-transparent transform transition-transform duration-500">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Participant Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Participant Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Participant Name:
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-lg border-transparent px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white text-gray-900"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* College Name and ID Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="college"
                className="block text-sm font-medium text-white"
              >
                College Name:
              </label>
              <input
                type="text"
                id="college"
                className="mt-1 block w-full rounded-lg border-transparent px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white text-gray-900"
                placeholder="Enter your college name"
                value={formData.college}
                onChange={(e) =>
                  setFormData({ ...formData, college: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Upload ID Card Photo:
              </label>
              <div className="mt-1 flex justify-center items-center px-6 py-4 border-2 border-dashed rounded-lg transition hover:shadow-lg hover:border-indigo-400 bg-white">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-gray-400">📷</div>
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <span>Choose File</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Year of Study */}
          <div>
            <label className="block text-sm font-medium text-white">
              Year of Study:
            </label>
            <div className="mt-2 space-x-4">
              {["1st", "2nd", "3rd"].map((year) => (
                <label key={year} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="year"
                    value={year}
                    className="form-radio h-4 w-4 text-indigo-600"
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                  />
                  <span className="ml-2 text-white">{year}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Email and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-lg border-transparent px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white text-gray-900"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-white"
              >
                Contact Number:
              </label>
              <input
                type="tel"
                id="contact"
                className="mt-1 block w-full rounded-lg border-transparent px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white text-gray-900"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
              />
            </div>
          </div>

          {/* Payment QR Codes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* QR Code 1: Yashraj Rane */}
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="text-center font-semibold mb-2 text-gray-800">Yashraj Rane</div>
              <img
                src="https://placehold.co/200x200/png?text=Yashraj+QR" // Replace with Yashraj's QR code URL
                alt="Yashraj Rane Payment QR Code"
                className="mx-auto rounded"
              />
              <div className="text-center text-sm text-gray-600 mt-2">
                Scan to pay with any UPI app
              </div>
            </div>

            {/* QR Code 2: Mihir Pusadkar */}
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="text-center font-semibold mb-2 text-gray-800">
                Mihir Pusadkar
              </div>
              <img
                src="https://placehold.co/200x200/png?text=Mihir+QR" // Replace with Mihir's QR code URL
                alt="Mihir Pusadkar Payment QR Code"
                className="mx-auto rounded"
              />
              <div className="text-center text-sm text-gray-600 mt-2">
                Scan to pay with any UPI app
              </div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="transaction"
                className="block text-sm font-medium text-white"
              >
                Transaction ID:
              </label>
              <input
                type="text"
                id="transaction"
                className="mt-1 block w-full rounded-lg border-transparent px-4 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white text-gray-900"
                placeholder="Enter your transaction ID"
                value={formData.transactionId}
                onChange={(e) =>
                  setFormData({ ...formData, transactionId: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Transaction Photo:
              </label>
              <div className="mt-1 flex justify-center items-center px-6 py-4 border-2 border-dashed rounded-lg transition hover:shadow-lg hover:border-indigo-400 bg-white">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-gray-400">📷</div>
                  <label
                    htmlFor="transaction-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <span>Choose File</span>
                    <input
                      id="transaction-upload"
                      name="transaction-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
