import React, { useState } from 'react';


function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    onNavigate('settings');
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Signin to your PopX account</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-purple-600">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-purple-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;