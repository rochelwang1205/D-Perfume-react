import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import LoginPage from './pages/LoginPage'
import WishlistPage from './pages/WishlistPage'
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import Logo from './assets/dPerfume.png'

function App() {
  const [cartItems, setCartItems] = useState(3)

  const navItems = [
    {
      label: 'Product',
      href: '/product',
      icon: 'store'
    },
    {
      label: 'Log In',
      href: '/login',
      icon: 'person'
    },
    {
      label: 'Wishlist',
      href: '/wishlist',
      icon: 'favorite'
    },
    {
      label: `Cart (${cartItems})`,
      href: '/cart',
      icon: 'shopping_cart'
    }
  ]

  const mobileNavItems = [
    {
      label: 'Product',
      href: '/product',
      icon: 'store'
    },
    {
      label: 'Wishlist',
      href: '/wishlist',
      icon: 'favorite'
    },
    {
      label: 'Blog',
      href: '/blog',
      icon: 'menu_book'
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: 'contact_mail'
    },
    {
      label: 'Log In',
      href: '/login',
      icon: 'person'
    }
  ]

  const handleNavItemClick = (item) => {
    console.log('Navigating to:', item.href)
  }

  const handleLogoClick = () => {
    console.log('Logo clicked')
  }

  return (
    <Router>
      <div>
        <Navbar
          logo={Logo}
          cartItemCount={cartItems}
          navItems={navItems}
          mobileNavItems={mobileNavItems}
          onNavItemClick={handleNavItemClick}
          onLogoClick={handleLogoClick}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App