import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const username = sessionStorage.getItem('fullname');
    setUser(username);
  }, []);

  return (
    <div >
      <div className="text-3xl font-bold mb-4">Welcome {user} name here</div>
      

    </div>
  );
};

export default Dashboard;


{/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => {
          sessionStorage.removeItem('fullname');
          navigate('/login');
        }}
      >
        Sign Out
      </button> */}