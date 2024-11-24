import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
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
      href: '/D-Perfume-react/product',
      icon: 'store'
    },
    {
      label: 'Log In',
      href: '/D-Perfume-react/login',
      icon: 'person'
    },
    {
      label: 'Wishlist',
      href: '/D-Perfume-react/wishlist',
      icon: 'favorite'
    },
    {
      label: `Cart (${cartItems})`,
      href: '/D-Perfume-react/cart',
      icon: 'shopping_cart'
    }
  ]

  const mobileNavItems = [
    {
      label: 'Product',
      href: '/D-Perfume-react/product',
      icon: 'store'
    },
    {
      label: 'Wishlist',
      href: '/D-Perfume-react/wishlist',
      icon: 'favorite'
    },
    {
      label: 'Blog',
      href: '/D-Perfume-react/blog',
      icon: 'menu_book'
    },
    {
      label: 'Contact',
      href: '/D-Perfume-react/contact',
      icon: 'contact_mail'
    },
    {
      label: 'Log In',
      href: '/D-Perfume-react/login',
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
          <Route path="/D-Perfume-react/" element={<HomePage />} />
          <Route path="/D-Perfume-react/product" element={<ProductPage />} />
          <Route path="/D-Perfume-react/login" element={<LoginPage />} />
          <Route path="/D-Perfume-react/wishlist" element={<WishlistPage />} />
          <Route path="/D-Perfume-react/cart" element={<CartPage />} />
          <Route path="/D-Perfume-react/blog" element={<BlogPage />} />
          <Route path="/D-Perfume-react/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App