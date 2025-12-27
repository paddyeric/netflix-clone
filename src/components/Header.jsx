import { styled } from "styled-components"
import { useNavigate, Link } from "react-router-dom"
import netflixLogo from "../assets/NetflixLargeLogo.png"


const Header = (props) => {

  const navigate = useNavigate()


  return (
    <HeaderContainer>
      <Link to={"/signup"}>
        <div className="logo">
          <img src={netflixLogo} alt="logo"/>
        </div>
      </Link>

      <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign In'}
      </button>

    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  .logo{
    img{
      height: 9rem;
      cursor: pointer;
    }
  }
  button{
    padding: 0.2rem 1rem;
    background-color: red;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`

export default Header
