import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="nav-left flex justify-between items-center w-full">
          <div className="logo-wrapper cursor-pointer">
            <img src="src/assets/Logo.png" alt="logo" className="h-12" />
          </div>

          <div className="nav-middle font-semibold">
            <Nav className="me-auto flex gap-4">
              <Nav.Link href="/" className="text-black">Home</Nav.Link>
              <Nav.Link href="/Shop" className="text-black">Shop</Nav.Link>
              <Nav.Link href="/About" className="text-black">About</Nav.Link>
              <Nav.Link href="/Contact" className="text-black">Contact</Nav.Link>
            </Nav> {}
          </div>

          <div className="nav-right flex gap-10 items-center cursor-pointer">
            <Person2OutlinedIcon />
            <SearchOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;