import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import Oauth from '../components/Oauth';

const Login = () => {
  const [show, setShow] = useState(true);
  
  const navigate = useNavigate();

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    user_email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4005/auth/login", data);
      console.log(data);
      if (response.data.error) {
        alert(response.data.error);
      } else if (response.data.success === true) {
        sessionStorage.setItem('fullname', response.data.result.user_fullname);
        sessionStorage.setItem('id', response.data.result.user_id);
        sessionStorage.setItem('role', response.data.result.role);
          if(response.data.result.role === 'admin'){
          navigate('/')
        } 
        if(response.data.result.role === 'student'){
          navigate('/dashboard')
        } 

      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("An error occurred while logging in");
    }
  };

  return (
    <div className=" bg-green-200 flex justify-center items-center">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md p-6">
        <div className="mt-4">
          <Formik
            initialValues={{ user_email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4">
                <label htmlFor="user_email">Your Login Email</label>
                <Field type="text" name="user_email" className="block w-full rounded-md p-2 shadow shadow-emerald-500" />
                <ErrorMessage name="user_email" component="div" className="text-red-600 font-extralight text-xs" />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password">Password</label>
                <Field type={show ? 'text' : 'password'} name="password" className="block w-full rounded-md p-2 shadow shadow-emerald-500" />
                <div className="absolute bottom-0 top-5 right-0  flex items-center mr-2">
                  <button type="button" className="text-gray-400" onClick={() => setShow(!show)}>
                    {show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-600 font-extralight text-xs" />
              </div>
              <div className="mb-4">
                <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300 ...">Submit</button>
              </div>
              <Oauth />
            </Form>
          </Formik>
        </div>
        <div className="text-center pt-3">
          <p className="text-sm">Dont have an Account? <Link className="text-red-700" to={'/register'}>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
