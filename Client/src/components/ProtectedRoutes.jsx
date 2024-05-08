//import React from 'react'

import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoutes = () => {
 
  const username = sessionStorage.getItem('user_id')

  return username ? <Outlet /> : <Navigate to={'/profile'} />

}

export default ProtectedRoutes











// const role = sessionStorage.getItem('role');

// // Check if the user is logged in and has a role
// if (role) {
//   // Check the user's role and redirect accordingly
//   if (role === 'admin') {
//     return <Outlet />;
//   } else {
//     // Redirect non-admin users to a different route
//     return <Navigate to={'/dashboard'} />;
//   }
// } else {
//   // Redirect users who are not logged in to the login page
//   return <Navigate to={'/login'} />;
// }

