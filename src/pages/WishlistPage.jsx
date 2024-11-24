import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import SubscriptionForm from '../components/SubscriptionForm';
import Footer from '../components/Footer';

const WishlistPage = () => {
  return (
    <>
    <SubscriptionForm />
    <Footer />
    </>
  )
}

export default WishlistPage