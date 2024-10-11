import React from 'react';
import Logo from '../assets/medcap_logo.png'; // Adjust path based on your structure
import Header from '../components/Headder'; // Assuming the same Header component is used

const ReportForm = () => {
  return (
    <div className="bg-pink-200 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Submit Your Medical Report
          </h1>
          <p className="text-xl mb-8">
            Upload your medical report to keep track of your health records.
          </p>

          <form className="space-y-6" encType="multipart/form-data">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input 
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input 
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="reportDate" className="block text-lg font-medium">
                Date of Report
              </label>
              <input 
                type="date"
                id="reportDate"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                required
              />
            </div>

            <div>
              <label htmlFor="reportType" className="block text-lg font-medium">
                Type of Report
              </label>
              <select
                id="reportType"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                required
              >
                <option value="">Select report type</option>
                <option value="blood-test">Blood Test</option>
                <option value="x-ray">X-ray</option>
                <option value="mri">MRI</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="reportFile" className="block text-lg font-medium">
                Upload Report
              </label>
              <input 
                type="file"
                id="reportFile"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-400 focus:border-pink-400"
                required
              />
            </div>

            <button className="w-full bg-pink-400 text-white px-6 py-3 rounded-full text-lg">
              Submit Report
            </button>
          </form>

          <p className="mt-4 text-sm">
            Go back to{' '}
            <a href="/dashboard" className="text-pink-500 font-medium">Dashboard</a>.
          </p>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-#F8CDEA w-64 h-64 rounded-full"></div>
            <img 
              src={Logo}
              alt="MedCap Logo"
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </main>

      {/* Statistics */}
      <div className="bg-purple-500 py-8">
        <div className="container mx-auto flex justify-between text-white text-center">
          <div>
            <div className="text-4xl font-bold">5k+</div>
            <div>Reports Submitted</div>
          </div>
          <div>
            <div className="text-4xl font-bold">100%</div>
            <div>Secure Upload</div>
          </div>
          <div>
            <div className="text-4xl font-bold">24/7</div>
            <div>Data Access</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
