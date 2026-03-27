import { Box } from "lucide-react"

const NavBar = () => {
  const handleAuthClick = async () => {};
  
  return (
    <header className="navbar" >
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo" />

            <span className="name">
              Roomification
            </span>
            
          </div>
          <ul className="links">
            <a href="#">Products</a>
            <a href="#">Pricing</a>
            <a href="#">Community</a>
            <a href="#">Enterprise</a>
          </ul>
        </div>
        <div className="actions">
            <button  onClick={handleAuthClick}
            className="login">
              Log In
            </button>
            <a href="#uploads" className="cta">
              Get Started
            </a>
        </div>

      </nav>
    </header>
  )
}

export default NavBar