import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Navbar';
import Footer from './Footer';
import { useLoader } from '../context/LoaderContext';
import { PropagateLoader } from 'react-spinners';

const Layout = () => {
  const location = useLocation();
  const { loading, showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader();
    hideLoader();
  }, [location.pathname]);

  if (loading) {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}
      >
        <PropagateLoader color="#B88E2F" size={15} />
        <p style={{ fontSize: '14px', color: '#777', marginTop: '1rem' }}>
          Loading your furniture dreams...
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
