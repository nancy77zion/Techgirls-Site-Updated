import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import axios from "axios"
import Cookies from 'js-cookie'; // Import js-cookie library



const Login2 = () => {
  const [show, setShow] = useState(true);
  const [user_email, setUser_email] = useState('');
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate();


  useEffect(() => {
    const loginHandler = async () => {
      try {
        const data = { user_email: user_email, password: password };
        const response = await axios.post("http://localhost:4005/auth/login", data);
        const accessToken = response.data.token || Cookies.get('access_token');
        if (accessToken) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", accessToken);
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    
    loginHandler(); // Trigger login when component mounts
  }, ); // Empty dependency array ensures login is only triggered once when component mounts


  // useEffect(() => {
  //   const data = { user_email: user_email, password: password };
  // axios.post("http://localhost:4005/auth/login", data).then((response) => {

  // const accessToken = response.data.token || Cookies.get('access_token');

  //   if (accessToken) {
  //     alert(response.data.error);
  //   } else {
  //     localStorage.setItem("accessToken", accessToken);
  //     // setAuthState({
  //     //   user_email: response.data.user_email,
  //     //   id: response.data.id,
  //     //   status: true,
  //     // });
  //     navigate("/dashboard");
  //   }
  // });

  // })
  


  return (
    <div className=" bg-green-200 flex justify-center items-center">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md p-6">
        <div className="mt-4">
          <div className="mb-4">
            <label htmlFor="username" className=""> Your login Email</label>
            <input type="text" name="username" value={user_email} onChange={(e) => setUser_email(e.target.value)} className="block w-full rounded-md p-2 shadow shadow-emerald-500 " />
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
        </div>
        <div className="text-center pt-3">
          <p className="text-sm">Dont have an Account? <Link className="text-red-700" to={'/register'}>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login2;
