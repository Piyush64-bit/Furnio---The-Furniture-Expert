import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary flex just
    ">
      <Container>
        {/* Top row: logo + toggle */}
        <div className="w-full flex items-center justify-between">
          <div className="logo-wrapper cursor-pointer">
            <img src="src/assets/Logo.png" alt="logo" className="h-12 w-auto" />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-3 lg:mt-0">
            {/* Nav links */}
            <Nav className="font-semibold flex flex-col lg:flex-row items-center sm:gap-4 gap-2">
              <Nav.Link href="/" className="text-black">Home</Nav.Link>
              <Nav.Link href="/Shop" className="text-black">Shop</Nav.Link>
              <Nav.Link href="/About" className="text-black">About</Nav.Link>
              <Nav.Link href="/Contact" className="text-black">Contact</Nav.Link>
            </Nav>

            {/* Right side icons */}
            <div className="nav-right flex md:gap-10 sm:gap-6 gap-4 items-center cursor-pointer lg:self-center">

              <Person2OutlinedIcon />
              <SearchOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
