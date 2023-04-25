import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  })

  const {name, email, password} = formData

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
           <input type='text' className="nameInput" placeHolder='Name' id='name' value={name} onChange={onChange}></input>
          <input type='email' className="emailInput" placeHolder='Email' id='email' value={email} onChange={onChange}></input>
          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'} className="passwordInput"
            placeHolder='Password' id='password' value={password} onChange={onChange}></input>
            <img src={visibilityIcon} alt="showPassword" className="showPassword" 
            onClick={() => setShowPassword((prevState) => !prevState)}/>
          </div>
          <Link to='/forgot-password' className="forgotPasswordLink"> Forgot Password</Link>
          <div className="signUpBar">
            <p className="singUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
            </button>
          </div>
        </form>
        {/** Google Oauth Component. */}
        <Link to='/sign-in' className="registerLink">Sign In Instead</Link>
      </div>
    </>
    )
}

export default SignUp
