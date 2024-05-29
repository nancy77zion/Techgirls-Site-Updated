// import {  useRef, useEffect , useState} from "react";
// import axios from "axios";
// import {getStorage} from "firebase/storage"
// import { app } from '../firebase';


// const Profile = () => {

//   const fileRef = useRef(null)

//   const [file, setFile] = useState(undefined)
//   console.log(file);
//   // const [formData, setFormData] = useState({
//   //   fullname: '',
//   //   email: '',
//   // });

//   useEffect(() => {
//     if (file) {RGG                                                                         
//       handleFileUpload(file)
//     }
//   },[file]);

//   const handleFileUpload = (file) => {
//      const storage = getStorage(app)  //stores the file in firebase storage
//      const fileName = new Date().getTime() + file.name //gives a unique filename so two files can't be uploaded.
//     const storageRef = ref(storage, fileName);

//     const uploadTask = uploadBytesResumable(storageRef, file); // track the % and error 

//   }

//   useEffect(() => {
//     // Function to fetch user data from the backend
//     const fetchUserData = async (data) => {
//       try {
//         // Make a GET request to the backend endpoint to fetch user data
//         await axios.get('/users/you/:id', data);
//         console.log(data)
//         // Set the form data state with the fetched user data
//         // setFormData({
//         //   name: response.data.user_fullname,
//         //   email: response.data.user_email,
//         // });
//       } catch (error) {
//         // Handle any errors that occur during the fetch
//         console.error('Error fetching user data:', error);
//       }
//     };
  
//     // Call the function to fetch user data when the component mounts
//     fetchUserData();
//   }, []);
 

//   return (
//     <div className="container mx-auto py-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Display user details */}
//           <div>
//           <input onChange={(e) => setFile(e.target.files[0])} type="file"  ref={fileRef} hidden accept="image/*"/>  
//             <img onClick={() => fileRef.current.click()}
//               src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
//               alt="profile-pic"
//               className="rounded-full h-24 w-24 object-cover cursor-pointer"
//             />
//             <h2 className="text-2xl font-bold mb-4">User Details</h2>
//             <div className="space-y-4">
//               <p>
//                 <strong>Name:</strong> ebere
//               </p>
//               <p>
//                 <strong>Email:</strong> ebere
//               </p>
//               <p>
//                 <strong>My Courses:</strong>
//               </p>
//               <ul className="list-disc pl-4">
                
//                   <li>course 1</li>
//                   <li>course 2</li>
            
//               </ul>
//             </div>
//           </div>

//           {/* Form to update user profile */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block font-semibold">
//                   Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="user_fullname"
//                   name="user_fullname"
//                   className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block font-semibold">
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   id="user_email"
//                   name="user_email"
//                   className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//               >
//                 Update Profile
//               </button>

//               <div className=" flex justify-between mt-5">
//                 <span className="text-red-700 cursor-pointer">
//                   Delete Account
//                 </span>
//                 <span className="text-red-700 cursor-pointer">sign out</span>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
