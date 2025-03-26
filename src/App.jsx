import React from 'react';
import { useState } from 'react';
import Welcome from './components/Welcome';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import AccountSettings from './components/AccountSettings';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    isAgency: false
  });

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleCreateAccount = (data) => {
    setUserData(data);
    navigateTo('settings');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'welcome' && <Welcome onNavigate={navigateTo} />}
      {currentPage === 'login' && <Login onNavigate={navigateTo} />}
      {currentPage === 'create' && <CreateAccount onSubmit={handleCreateAccount} onNavigate={navigateTo} />}
      {currentPage === 'settings' && <AccountSettings userData={userData} />}
    </div>
  );
}

export default App;