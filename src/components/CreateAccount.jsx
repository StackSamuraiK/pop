import React, { useState } from 'react';

function CreateAccount({ onSubmit, onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Create your PopX account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-purple-600">Full Name*</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Enter full name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-purple-600">Phone number*</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Enter phone number"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-purple-600">Email address*</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter email address"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-purple-600">Password*</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-purple-600">Company name</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="Enter company name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div className="space-y-2">
          <p className="text-purple-600">Are you an Agency?*</p>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                checked={formData.isAgency}
                onChange={() => setFormData({ ...formData, isAgency: true })}
                className="text-purple-600 focus:ring-purple-500"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                checked={!formData.isAgency}
                onChange={() => setFormData({ ...formData, isAgency: false })}
                className="text-purple-600 focus:ring-purple-500"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;