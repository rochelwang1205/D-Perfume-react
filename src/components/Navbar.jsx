import React, { useState } from 'react'
import { Link } from 'react-router-dom'  // 重要：引入 Link
import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-symbols/outlined.css'
import PropTypes from 'prop-types'

const Navbar = ({ 
  logo = '', 
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
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 container">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        {logo && (
          <Link  // 使用 Link 替代 <a>
            to="/D-Perfume-react"  // 導航到首頁
            className="navbar-brand"
            onClick={(e) => {
              if (onLogoClick) onLogoClick()
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              style={{ maxHeight: '50px' }} 
            />
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="d-none d-lg-flex align-items-center">
          <ul className="navbar-nav d-flex flex-row gap-3">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="nav-item d-flex align-items-center"
              >
                <Link  // 使用 Link 替代 <a>
                  to={item.href}  // 使用 to 屬性
                  className="nav-link d-flex align-items-center"
                  onClick={() => handleNavItemClick(item)}
                >
                  {item.icon && (
                    <span className="material-symbols-outlined me-1">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </Link>
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
          className="offcanvas offcanvas-top show h-auto d-lg-none" 
          tabIndex="-1" 
          data-bs-scroll="false"
          backdrop="false"
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
          <div className="offcanvas-body bg-darkgray">
            <ul className="list-unstyled">
              {mobileNavItems.map((item, index) => (
                <li 
                  key={index} 
                  className="mb-3 border-bottom pb-2"
                >
                  <Link  // 使用 Link 替代 <a>
                    to={item.href}  // 使用 to 屬性
                    className="text-decoration-none text-white d-flex align-items-center justify-content-center"
                    onClick={() => {
                      handleNavItemClick(item)
                    }}
                  >
                    {item.icon && (
                      <span className="material-symbols-outlined me-2">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </Link>
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
  logo: PropTypes.string,
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