import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#916019',
    color: '#fff'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: '#fff',
      textDecoration: 'underline'
    }
  };

  return (
    <footer style={footerStyle}>
      <div 
        className="container d-flex justify-content-between align-items-center py-3"
        style={{ maxWidth: '1078px' }}
      >
        <div className="d-flex align-items-center">
          <Link to="/D-Perfume-react" className="me-4">
            <img 
              src="https://github.com/rochelwang1205/D-Perfume/blob/main/assets/images/d%E2%80%99Perfumewhite.png?raw=true" 
              alt="D'Perfume logo"
              height="30"
            />
          </Link>
          <p className="mb-0">© 2020. All Rights Reserved.</p>
        </div>
        
        <ul className="list-unstyled d-none d-md-flex mb-0">
          <li className="me-4">
            <Link to="/D-Perfume-react/product" style={linkStyle}>
              Product
            </Link>
          </li>
          <li className="me-4">
            <Link to="/D-Perfume-react/blog" style={linkStyle}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/D-Perfume-react/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;