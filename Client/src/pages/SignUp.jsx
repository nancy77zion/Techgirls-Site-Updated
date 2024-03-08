
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

const SignUp = () => {
 
  const [show, setShow] = useState()

  const navigate = useNavigate();

  const initialValue = {
    user_lastname: '',
    user_firstname: '',
    user_type: '',
    password: '',
    email: '',
    tick: false
  };

  const validationSchema = Yup.object().shape({
    user_lastname: Yup.string().required('Last name is required'),
    user_firstname: Yup.string().required('First name is required'),
    user_type: Yup.string().required('User type is required'),
    password: Yup.string().required('Password is required'),
    user_email: Yup.string().email('Invalid email').required('Email is required'),
    tick: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });
  

  const handleSubmit =  async (data) => {
    try {
      const url = `http://localhost:4005/auth/register`;
      const response = await axios.post(url, data);
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" my-10 mx-10 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md p-6">
        <div className="text-center mb-3">
          <p className="">Already signed-up? <Link className="text-red-700" to={'/login'}>Login here</Link></p>
        </div>
        <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="">
          <div className="mb-2">
          <label>Last Name:</label>
            <Field type="text" name="user_lastname" className="block w-full shadow shadow-emerald-500 rounded-md p-2" />
            <ErrorMessage name="user_lastname" component="span" className='text-red-600 font-extralight text-xs'/>
          </div>
          <div className="mb-2">
          <label>First Name:</label>
            <Field type="text" name="user_firstname" className="block w-full shadow shadow-emerald-500 rounded-md p-2" />
            <ErrorMessage name="user_firstname" component="span" className='text-red-600 font-extralight text-xs' />
          </div>
          <div className="mb-2">
              <label>Student or Instructor:</label>
              <Field type="text" name="user_type" className="block w-full shadow shadow-emerald-500 rounded-md p-2" />
              <ErrorMessage name="user_type" component="span" className='text-red-600 font-extralight text-xs'/>
            </div>
          <div className="mb-2">
            <label className="">Email</label>
            <Field type="email" name="user_email" placeholder="example@gmail.com" className="w-full shadow shadow-emerald-500 rounded-md p-2" />
            <ErrorMessage name="user_email" component="span" className='text-red-600 font-extralight text-xs'/>
          </div>
          <div className="mb-2 relative">
            <label className="">Password</label>
            <Field type={show ? 'text' : 'password'} name="password" className="block w-full shadow shadow-emerald-500 rounded-md p-2 " />
            <div className="absolute bottom-0 top-5 right-0 flex items-center mr-2">
              <button type="button" className="text-gray-400" onClick={() => setShow(!show)}>
                {show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </button>
            </div>
            <ErrorMessage name="password" component="span" className='text-red-600 font-extralight text-xs'/>
          </div>
          <div className="mb-2 flex items-center">
          <Field type="checkbox" name="tick"className="mr-2" />
          <label>Accept Terms and Conditions</label>
          </div>
          <ErrorMessage name="tick" component="span" className='text-red-600 font-extralight text-xs'/>
          <div className="mb-2">
            <button type="submit" className=" w-full bg-emerald-600 text-white py-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-400 duration-300 ...">Submit</button>
          </div>
        </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp
