import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const {email, password} = formData

  const navigate = useNavigate()
  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }))
  }

  return (
    <>
      <div className="pageContainer">
        <header className="pageHeader">Welcome Back!</header>
        <form>
          <input type='email' className="emailInput" placeHolder='Email' id='email' value={email} onChange={onChange}></input>
          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'} className="passwordInput"
            placeHolder='Password' id='password' value={password} onChange={onChange}></input>
            <img src={visibilityIcon} alt="showPassword" className="showPassword" 
            onClick={() => setShowPassword((prevState) => !prevState)}/>
          </div>
          <Link to='/forgot-password' className="forgotPasswordLink"> Forgot Password</Link>
          <div className="signInBar">
            <p className="singInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
            </button>
          </div>
        </form>
        {/** Google Oauth Component. */}
        <Link to='/sign-up' className="registerLink">Sign Up Instead</Link>
      </div>
    </>
    )
}

export default SignIn
