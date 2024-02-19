import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const Login = () => {
  const [show, setShow] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const registerData = sessionStorage.getItem('username');
    const userInfo = JSON.parse(registerData) || {}; // Handle case where data is null
    setUserData(userInfo);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData?.username === username && userData?.password === password) {
      sessionStorage.setItem('username', username);
      navigate('/dashboard');
    } else {
      alert('Invalid user');
    }
  };

  return (
    <div className=" bg-green-200 flex justify-center items-center">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md p-6">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="username" className="">Full Names</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full rounded-md p-2 shadow shadow-emerald-500 " />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="">Password</label>
            <input type={show ? 'text' : 'password'} name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md p-2 shadow shadow-emerald-500" />
            <div className="absolute bottom-0 top-5 right-0  flex items-center mr-2">
              <button type="button" className="text-gray-400" onClick={() => setShow(!show)}>
                {show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300 ...">Submit</button>
          </div>
        </form>
        <div className="text-center pt-3">
          <p className="text-sm">Dont have an Account? <Link className="text-red-700" to={'/register'}>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
