import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Navbar.css";
import cart1 from "../assets/cart01.png";
import cart2 from "../assets/cart02.png";

function navbar() {
  // Cart
  const [showCartPopup, setShowCartPopup] = useState(false);
  const cartRef = useRef();

  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: "250,000.00",
      image: cart1,
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: "270,000.00",
      image: cart2,
    },
  ];

  const toggleCartPopup = () => setShowCartPopup((prev) => !prev);

  // Wishlist
  const [showWishlistPopup, setShowWishlistPopup] = useState(false);
  const wishlistRef = useRef();

  const wishlistItems = [
    {
      id: 1,
      name: "Luxury Coffee Table",
      price: "15,000.00",
      image: cart1,
    },
    {
      id: 2,
      name: "Elegant Floor Lamp",
      price: "8,999.00",
      image: cart2,
    },
  ];

  const toggleWishlistPopup = () => setShowWishlistPopup((prev) => !prev);

  // Search
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const searchRef = useRef();

  const toggleSearchPopup = () => setShowSearchPopup((prev) => !prev);

  // Close popups on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCartPopup(false);
      }
      if (wishlistRef.current && !wishlistRef.current.contains(e.target)) {
        setShowWishlistPopup(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCartPopup, showWishlistPopup, showSearchPopup]);

  return (
    <Navbar expand="lg" className="bg-white py-3 shadow-sm position-sticky top-0 z-100">
      <Container fluid className="px-4">
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

        <Navbar.Collapse id="basic-navbar-nav" className="mt-3 mt-lg-0">
          <div className="d-flex flex-column flex-lg-row align-items-center w-100">
            <div className="d-none d-lg-flex justify-content-start flex-grow-1" />

            <div className="position-absolute start-50 translate-middle-x d-none d-lg-flex">
              <Nav className="flex-row text-center gap-4">
                {["Home", "Shop", "Blog", "Contact"].map((item) => (
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

            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-end flex-grow-1 order-3 gap-3 position-relative">
              <div className="d-flex gap-3 align-items-center">
                {/* 👤 Profile */}
                <Link to="/profile" className="text-dark nav-icon-hover">
                  <Person2OutlinedIcon fontSize="medium" />
                </Link>

                {/* 🔍 Search */}
                <span
                  className="text-dark nav-icon-hover position-relative"
                  onClick={toggleSearchPopup}
                  style={{ cursor: "pointer" }}
                  ref={searchRef}
                >
                  <SearchOutlinedIcon />
                  <AnimatePresence>
                    {showSearchPopup && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="position-absolute end-0 mt-2 p-3 bg-light border rounded shadow-sm"
                        style={{ width: "300px", zIndex: 999 }}
                      >
                        <input
                          type="text"
                          placeholder="Search for products..."
                          className="form-control"
                          style={{
                            borderColor: "#B88E2F",
                            outline: "none",
                            boxShadow: "0 0 0 2px rgba(184, 142, 47, 0.3)",
                          }}
                          autoFocus
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>

                {/* 💖 Wishlist */}
                <span
                  className="text-dark nav-icon-hover position-relative"
                  onClick={toggleWishlistPopup}
                  style={{ cursor: "pointer" }}
                  ref={wishlistRef}
                >
                  <FavoriteBorderOutlinedIcon />
                  <AnimatePresence>
                    {showWishlistPopup && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="position-absolute end-0 mt-2 px-8 py-8 bg-light border rounded shadow-sm"
                        style={{ width: "370px", zIndex: 999 }}
                      >
                        <h3 className="d-block mb-1">Your Wishlist</h3>
                        <hr />
                        {wishlistItems.length > 0 ? (
                          <>
                            <ul className="list-unstyled mb-2">
                              {wishlistItems.map((item) => (
                                <li
                                  key={item.id}
                                  className="d-flex align-items-center mb-3"
                                  style={{ gap: "12px" }}
                                >
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      objectFit: "cover",
                                      borderRadius: "8px",
                                    }}
                                  />
                                  <div className="flex-grow-1">
                                    <p className="mb-0 fw-semibold">
                                      {item.name}
                                    </p>
                                    <small className="text-muted">
                                      ₹{item.price}
                                    </small>
                                  </div>
                                </li>
                              ))}
                            </ul>
                            <hr />
                            <div className="flex gap-4">
                              <Link
                                to="/wishlist"
                                className="btn btn-sm btn-dark"
                              >
                                View All
                              </Link>
                              <Link
                                to="/cart"
                                className="btn btn-sm btn-outline-dark"
                              >
                                Move to Cart
                              </Link>
                            </div>
                          </>
                        ) : (
                          <p className="mb-0 text-muted">No favorites yet 💔</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>

                {/* 🛒 Cart */}
                <span
                  className="text-dark nav-icon-hover position-relative"
                  onClick={toggleCartPopup}
                  style={{ cursor: "pointer" }}
                  ref={cartRef}
                >
                  <ShoppingCartOutlinedIcon />
                  <AnimatePresence>
                    {showCartPopup && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="position-absolute end-0 mt-2 px-8 py-8 bg-light border rounded shadow-sm"
                        style={{ width: "370px", zIndex: 999 }}
                      >
                        <h3 className="d-block mb-1">Shopping Cart </h3>
                        <hr />
                        {cartItems.length > 0 ? (
                          <>
                            <ul className="list-unstyled mb-2">
                              {cartItems.map((item) => (
                                <li
                                  key={item.id}
                                  className="d-flex align-items-center mb-3"
                                  style={{ gap: "12px" }}
                                >
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      objectFit: "cover",
                                      borderRadius: "8px",
                                    }}
                                  />
                                  <div className="flex-grow-1">
                                    <p className="mb-0 fw-semibold">
                                      {item.name}
                                    </p>
                                    <small className="text-muted">
                                      ₹{item.price}
                                    </small>
                                  </div>
                                </li>
                              ))}
                            </ul>
                            <div className="flex gap-4 mt-8">
                              <p>Subtotal</p>
                              <p className="text-[#B88E2F]">Rs. 520,000.00</p>
                            </div>
                            <hr />
                            <div className="flex gap-4">
                              <Link to="/cart" className="btn btn-sm btn-dark">
                                Cart
                              </Link>
                              <Link
                                to="/checkout"
                                className="btn btn-sm btn-dark"
                              >
                                Checkout
                              </Link>
                              <Link
                                to="/comparison"
                                className="btn btn-sm btn-dark"
                              >
                                Comparison
                              </Link>
                            </div>
                          </>
                        ) : (
                          <p className="mb-0 text-muted">Your cart is empty</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              </div>

              {/* Auth Buttons */}
              <div className="d-flex gap-2 flex-nowrap align-items-center">
                <Link
                  to="/login"
                  className="btn btn-outline-dark px-4 py-1"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-dark px-3 py-1"
                  style={{
                    backgroundColor: "#B88E2F",
                    borderColor: "#B88E2F",
                    whiteSpace: "nowrap",
                  }}
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

export default navbar;
