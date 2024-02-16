
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const SignUp = () => {
  const navigate = useNavigate();

  const initialValue = {
    username: '',
    password: '',
    email: '',
    age: 0,
    gender: '',
    skills: '',
    bio: '',
    tick: false
  };

  const [userData, setUserData] = useState(initialValue);
  const [show, setShow] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({ ...userData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = JSON.stringify(userData);
    sessionStorage.getItem('username') === null
      ? sessionStorage.setItem('username', newUser)
      : (sessionStorage.removeItem('username'), sessionStorage.setItem('username', newUser));
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" my-10 mx-10 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md p-6">
        <div className="text-center mb-3">
          <p className="">Already signed-up? <Link className="text-amber-500" to={'/login'}>Login here</Link></p>
        </div>
        <form onSubmit={handleSubmit} className="">
          <div className="mb-2">
            <label htmlFor="username" className="">Full Names</label>
            <input type="text" name="username" value={userData.username} onChange={handleChange} className="block w-full shadow shadow-emerald-500 rounded-md p-2" />
          </div>
          <div className="mb-2 relative">
            <label htmlFor="password" className="">Password</label>
            <input type={show ? 'text' : 'password'} name="password" value={userData.password} onChange={handleChange} className="block w-full shadow shadow-emerald-500 rounded-md p-2 " />
            <div className="absolute bottom-0 top-5 right-0 flex items-center mr-2">
              <button type="button" className="text-gray-400" onClick={() => setShow(!show)}>
                {show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </button>
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="">Email</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="example@gmail.com" className="w-full shadow shadow-emerald-500 rounded-md p-2" />
          </div>
          <div className="mb-2">
            <label htmlFor="age" className="">Age</label>
            <input type="number" name="age" value={userData.age} onChange={handleChange} className="w-full shadow shadow-emerald-500 rounded-md p-2" />
          </div>
          <div className="mb-2">
            <label htmlFor="skills" className="">Choose a skill</label>
            <select name="skills" value={userData.skills} onChange={handleChange} className="w-full shadow shadow-emerald-500 rounded-md p-2">
              <option value=""></option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="js">JS</option>
              <option value="react">REACT</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="gender" className="">Gender</label>
            <select name="gender" value={userData.gender} onChange={handleChange} className="w-full shadow shadow-emerald-500 rounded-md p-2">
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="bio" className="">Bio</label>
            <textarea name="bio" value={userData.bio} onChange={handleChange} placeholder="Tell us something about you" className="w-full shadow shadow-emerald-500 rounded-md p-2"></textarea>
          </div>
          <div className="mb-2 flex items-center">
            <input type="checkbox" name="tick" checked={userData.tick} onChange={handleChange} className="mr-2" />
            <label htmlFor="tick" className="">I agree to the terms and conditions</label>
          </div>
          <div className="mb-2">
            <button type="submit" className=" w-full bg-emerald-600 text-white py-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300 ...">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp
