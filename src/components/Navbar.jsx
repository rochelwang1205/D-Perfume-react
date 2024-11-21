import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-symbols/outlined.css'
import PropTypes from 'prop-types'

const Navbar = ({ 
  logo = '', // Provide a default empty string
  cartItemCount = 0, 
  navItems = [], 
  mobileNavItems = [],
  onLogoClick,
  onNavItemClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavItemClick = (item) => {
    if (onNavItemClick) {
      onNavItemClick(item)
    }
    // Optional: close mobile menu after click
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        {logo && (
          <a 
            href="#" 
            className="navbar-brand"
            onClick={(e) => {
              e.preventDefault()
              if (onLogoClick) onLogoClick()
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              style={{ maxHeight: '50px' }} 
            />
          </a>
        )}

         {/* Desktop Navigation */}
         <div className="d-none d-lg-flex align-items-center">
          <ul className="navbar-nav d-flex flex-row gap-3">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="nav-item d-flex align-items-center"
              >
                <a 
                  href={item.href} 
                  className="nav-link d-flex align-items-center"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavItemClick(item)
                  }}
                >
                  {item.icon && (
                    <span className="material-symbols-outlined me-1">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="d-lg-none d-flex align-items-center">
          {/* Mobile Cart */}
          {cartItemCount > 0 && (
            <div className="position-relative me-3">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                style={{ fontSize: '0.6rem' }}
              >
                {cartItemCount}
              </span>
            </div>
          )}

          {/* Mobile Hamburger Menu */}
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Offcanvas */}
      {isMenuOpen && (
        <div 
          className="offcanvas offcanvas-end show" 
          tabIndex="-1" 
          style={{ 
            visibility: 'visible', 
            backgroundColor: 'white' 
          }}
        >
          <div className="offcanvas-header">
            <button 
              type="button" 
              className="btn-close text-reset" 
              onClick={toggleMenu}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled">
              {mobileNavItems.map((item, index) => (
                <li 
                  key={index} 
                  className="mb-3 border-bottom pb-2"
                >
                  <a 
                    href={item.href} 
                    className="text-decoration-none text-dark d-flex align-items-center"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavItemClick(item)
                    }}
                  >
                    {item.icon && (
                      <span className="material-symbols-outlined me-2">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        )}
    </nav>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string, // Make logo optional
  cartItemCount: PropTypes.number,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  mobileNavItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  onLogoClick: PropTypes.func,
  onNavItemClick: PropTypes.func
}

export default Navbar