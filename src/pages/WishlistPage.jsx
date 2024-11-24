import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Heart, ShoppingCart } from 'lucide-react';
import SubscriptionForm from '../components/SubscriptionForm';
import Footer from '../components/Footer';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 從 localStorage 讀取收藏清單
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // 取得所有商品資料
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ec-course-api.hexschool.io/v2/api/hex-project/products/all');
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // 處理取消收藏
  const toggleWishlist = (product) => {
    const newWishlist = wishlist.filter(id => id !== product.id);
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  // 篩選出已收藏的商品
  const wishlistProducts = products.filter(product => wishlist.includes(product.id));

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-monospace">
      <div className="container py-5">
        <h2 className="text-center mb-4">我的收藏清單</h2>
        
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-5">
            <h3>目前沒有收藏的商品</h3>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="col mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="ratio ratio-1x1">
                    <img 
                      src={product.image} 
                      className="card-img-top object-fit-cover"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold fs-4">{product.title}</h5>
                    <p className="card-text mb-2">{product.category}</p>
                    <p className="card-text mb-2">{product.unit}</p>
                    <div className="d-flex fs-5">
                      <p className="card-text mb-3 me-3">
                        ${product.price}
                      </p>
                      <p className="card-text text-muted text-decoration-line-through mb-1">
                        ${product.origin_price}
                      </p>
                    </div>
                    <div className="d-flex gap-2">
                      <button 
                        className="cart-btn p-0 bg-transparent border-0"
                        onClick={() => toggleWishlist(product)} 
                      >
                        <Heart 
                          size={24}
                          fill="#795548"
                          className="text-brown"
                        />
                      </button>
                      <button 
                        className="cart-btn p-0 bg-transparent border-0"
                        onClick={() => alert('Added to cart!')} 
                      >
                        <ShoppingCart 
                          size={24} 
                          className="text-brown"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default WishlistPage;