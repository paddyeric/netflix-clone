import {useState} from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

import {firebaseAuth} from '../utils/firebase-config'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import FrontPage from '../components/FrontPage'
import Footer from '../components/Footer'

const SignUpPage = () => {
  //function to to hide and show single line logIn
  const [showPassword, setShowPassword] = useState(false)

  //function to create a user with firebase
  const [formValues, setFormValues] = useState({email: '', password:''})
  const handleSignIn = async() => {
    try {
          const{email, password} = formValues;
          await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
          console.log(error)
    }
  }

  //to setup navigation path to new page with firebase
  const navigate = useNavigate()

  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(currentUser) navigate('/')
  })

  return (
    <Container>
      <BackgroundImage/>
      <div className='content'>
        <Header login/>

    
        <div className='body'>
          <div className='text'>
            <h1>Unlimited movies, Tv shows and more</h1>
            <h4>watch anywhere, Cancel Anytime</h4>
            <h6>Ready to watch? Enter your email to create or restart member</h6>
          </div>

          <div className='form'>
            {
              showPassword ? (
                              <input type="password" placeholder='password' name='password' className=''
                              value={formValues.password} 
                              onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})}/>
                             ) 
                             :
                             (<input type="email" placeholder='email address' name='email' className=''
                              value={formValues.email} 
                              onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})}/>
                             )
            }
            {
              !showPassword ? (<button onClick={() => setShowPassword(true)}>Get Started</button>) 
                              : 
                              (<button onClick={handleSignIn}>Sign Up</button>)
            }
            
          </div>
        </div>
      </div>
      <FrontPage/>

      <Footer/>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  .content{
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: rgba(0,0,0,0.79);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .body{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text{
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 2rem;
      color: white;
    }
    .text h1{
      font-size: 3rem;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .text h4{
      font-size: 1.5rem;
    }
    .text h6{
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
  .form{
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    input{
      color: white;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      width: 40rem;
      border: 2px solid white;
      border-radius: 0.2rem;
      margin-right: 1rem;
    
      input:focus {
        outline: none;
      }
    }
    button{
      background-color: red;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 1.05rem;
      border-radius: 0.2rem;
    }
  }
`

export default SignUpPage
