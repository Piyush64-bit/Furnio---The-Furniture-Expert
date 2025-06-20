import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-white py-3 shadow-sm">
      <Container fluid className="px-4">
        {/* Logo + Toggle */}
        <div className="d-flex align-items-center justify-content-between w-100">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="src/assets/Logo.png"
              alt="Logo"
              style={{ height: "32px", width: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        {/* Collapsible Section */}
        <Navbar.Collapse id="basic-navbar-nav" className="mt-3 mt-lg-0">
          <div className="d-flex flex-column flex-lg-row align-items-center w-100">
            {/* Left - Empty Spacer (to balance) */}
            <div className="d-none d-lg-flex justify-content-start flex-grow-1" />

            {/* Center - Nav Links */}
            <div className="position-absolute start-50 translate-middle-x d-none d-lg-flex">
              <Nav className="flex-row text-center gap-4">
                {["Home", "Shop", "About", "Contact"].map((item) => (
                  <Nav.Link
                    key={item}
                    as={Link}
                    to={`/${item === "Home" ? "" : item}`}
                    className="text-dark fw-semibold nav-hover"
                  >
                    {item}
                  </Nav.Link>
                ))}
              </Nav>
            </div>

            {/* Right - Icons + Buttons */}
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-end flex-grow-1 order-3 gap-3">
              {/* Icons */}
              <div className="d-flex gap-3">
                <Link to="/profile" className="text-dark nav-icon-hover">
                  <Person2OutlinedIcon fontSize="medium" />
                </Link>
                <span className="text-dark nav-icon-hover">
                  <SearchOutlinedIcon />
                </span>
                <span className="text-dark nav-icon-hover">
                  <FavoriteBorderOutlinedIcon />
                </span>
                <Link to="/cart" className="text-dark nav-icon-hover">
                  <ShoppingCartOutlinedIcon />
                </Link>
              </div>

              {/* Auth Buttons */}
              <div className="d-flex gap-2">
                <Link to="/login" className="btn btn-outline-dark px-3 py-1">
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-dark px-3 py-1"
                  style={{ backgroundColor: "#B88E2F", borderColor: "#B88E2F" }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
