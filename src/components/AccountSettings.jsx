import React from 'react';
import { Camera } from 'lucide-react';



function AccountSettings({ userData }) {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold p-4 border-b">Account Settings</h1>
      
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 p-1 bg-purple-600 rounded-full">
              <Camera className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">{userData.fullName}</h2>
            <p className="text-gray-600">{userData.email}</p>
          </div>
        </div>

        <p className="text-gray-700">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default AccountSettings;