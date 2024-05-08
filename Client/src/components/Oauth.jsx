import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Oauth = () => {

  const navigate = useNavigate()

  const handleGoogleClick = async () => {

    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider) //get the informations from google firebase
      console.log(result);

      const fetchResult = await fetch('/auth/google', {     //fetch the google route from backend

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),  //send these back to the backend server
      })

      const data = await fetchResult.json(); //covert it to json object and store in a variable(data )
      console.log(data);
      navigate('/dashboard');

    } catch (error) {
      console.log('could not sign in with Google', error);
    }
   
  }

  return (
    <button
    onClick={handleGoogleClick}
    type='button'
    className='w-full bg-red-700 text-white py-2 rounded-md uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 ...hover:opacity-95'
  >
    Continue with google
  </button>
  )
}

export default Oauth