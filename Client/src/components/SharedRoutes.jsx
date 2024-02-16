//import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import { FaTwitter,FaLinkedin,FaFacebook, FaInstagram, FaSlack} from 'react-icons/fa'
import { FaHome, FaPhone, FaMailBulk } from 'react-icons/fa'
import Header from './Header'

const SharedRoutes = () => {
  return (
    <>
      <Header />
      <div className='bg-emerald-100'>
        <Outlet />
      </div>

      <div className='footer-cont bg-amber-600 py-8'>
        <div className='container mx-auto px-4'>
          <div className='footer grid grid-cols-1 md:grid-cols-2'>
            <p className='md:col-span-1 pt-3 md:pt-0 text-center md:text-left'>Get connected with us on social networks:</p>
            <div className='flex justify-center md:justify-end md:col-span-1 px-4'>
              <span className='px-2'><a className='text-white' href=''><FaTwitter /></a></span>
              <span className='px-2'><a className='text-white' href=''><FaLinkedin /></a></span>
              <span className='px-2'><a className='text-white' href=''><FaFacebook /></a></span>
              <span className='px-2'><a className='text-white' href=''><FaInstagram /></a></span>
              <span className='px-2'><a className='text-white' href=''><FaSlack /></a></span>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
            <div className='px-4'>
              <div className='flex items-center'>
                <h2 className='text-3xl text-white'>T</h2>
                <h2 className='text-3xl text-white ml-1'>Tech<span className='text-success'>Girls</span></h2>
              </div>
              <p className='mt-4 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vitae mollitia tenetur corporis. Natus ex nemo dicta obcaecati, sapiente, ut voluptate ratione modi iure accusantium similique</p>
            </div>
            <div className='text-center'>
              <h4 className='text-xl text-white'>Quick links</h4>
              <div className='mt-4'>
                <Link to='/about' className='block text-white hover:underline'>About</Link>
                <Link to='/courses' className='block text-white hover:underline mt-2'>Courses</Link>
                <Link to='/faqs' className='block text-white hover:underline mt-2'>FAQs</Link>
              </div>
            </div>
            <div className='text-center'>
              <h4 className='text-xl text-white'>Contact us</h4>
              <p className='text-white mt-4'><FaHome /> 7 New Haven Road, Lagos. Nigeria</p>
              <p className='text-white'><FaPhone /> (+234) 7086419364</p>
              <p className='text-white'><FaMailBulk /> <a href='mailto:support@techgirls.com' className='hover:underline'>support@techgirls.com</a></p>
            </div>
          </div>
          <div className='text-center mt-8 text-white'>&copy; 2023 Copyright TechGirls.com</div>
        </div>
      </div>
    </>
  );
};


export default SharedRoutes