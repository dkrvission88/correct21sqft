import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
      <div className='container-supplyl2'>
        <div className='img-supplyl2'>
          {/* <img src='/image/div2.jpg' alt='img' /> */}
          <img src='/image/div1.jpg' alt='img' />
        </div>
        <form className='login-supplyl2'>
          <div className="pic210l2">
            <div></div>
            <img src='https://s3-alpha-sig.figma.com/img/6cb7/38cb/9ca1ef94b1c68d847bf8f99ce05df810?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ycl1Vuy2KMq7-hMXzJrCE-3U1TavpfJtgXYwKAAFCpiEaVBkQxNQ7oJrkKmK56MAVmH2wHiEJKqiZqgUeh-F8ZMIgc~k7QZXhcjXDVM7oNDqe6~MtlW02Ly4D37MUFp2UxqOjmhvINxccnkdAYYpJV90IoAWjYhVRogwbMxUe96Vbt1mVUOzMRSkcw0MgDhtYzHFgadEqnwLIv6Wac36TFW36dYeSJEkG9Z9iKpoNVRIQ7edQ4XbBePD5IprBV2ytI4zbvKondOOWFUdHmcXPCzRdo~fVmvfX1aTtYQFJHlL1JPFnIfOqOgswlXxumqDbwdT3NDiazm2JiKanFpfhg__' alt=''></img>
          </div>
          <div className="bwell2">
            <div className='wel-supplyl2'>Welcome!</div>
            <div className='div-supplyl2'>
              <Link to='/login' className='user1l2'>User</Link>
              <Link to='/supplier' className='supply1l2'>Contractor/Supplier</Link>
            </div>
            <div className='info-supplyl2'>
              <div className='user-logl2'>
                <label>Email Address/Phone no</label>
                <input type="text" placeholder='Enter your Email Address' />
              </div>
              <div className='user-log2l2'>
                <label>User name</label>
                <input type="text" placeholder='Enter your User name' />
              </div>
              <div className='user-passl2'>
                <label>Password</label>
                <input type="password" placeholder='Enter your password' />
              </div>
            </div>
            <div className='registration1l2'>
              <Link to='/registration' className='butlerl2' >
                <button type='submit'>Sign Up</button>
              </Link>
              <div className='dosulppyl2'> Already have an account.
                <Link to='/' className='dkrl2'>Login</Link></div>


            </div>




          </div>
        </form>
      </div>














    </>
  )
}

export default Signup