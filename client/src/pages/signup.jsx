import React from 'react'

function Signup() {
  return (
    <div>
      <div className='signup'>
   <form>
        <h3>Signup Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Sign Up</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>

    </div>
    </div>
  )
}

export default Signup;
