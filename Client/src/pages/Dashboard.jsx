import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    setUser(username);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-3xl font-bold mb-4">Welcome to your Dashboard</div>
      <h3 className="text-xl mb-2">Hello {user}</h3>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => {
          sessionStorage.removeItem('username');
          navigate('/login');
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
