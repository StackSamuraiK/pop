import React from 'react';


function Welcome({ onNavigate }) {
  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      
      <div className="space-y-4">
        <button
          onClick={() => onNavigate('create')}
          className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
        
        <button
          onClick={() => onNavigate('login')}
          className="w-full py-3 px-4 bg-purple-100 text-purple-900 rounded-lg hover:bg-purple-200 transition-colors"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;