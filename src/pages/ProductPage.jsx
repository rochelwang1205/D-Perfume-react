import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  // 從 localStorage 讀取收藏清單
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ec-course-api.hexschool.io/v2/api/hex-project/products/all');
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
          const uniqueCategories = [...new Set(data.products.map(product => product.category))];
          setCategories(uniqueCategories);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // 處理收藏商品
  const toggleWishlist = (product) => {
    const newWishlist = wishlist.includes(product.id)
      ? wishlist.filter(id => id !== product.id)
      : [...wishlist, product.id];
    
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

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
      {/* Category Navigation */}
      <div className="bg-brown">
        <div className="container py-3">
          <nav className="nav nav-pills">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`nav-link border-0 text-white me-3 ${
                  selectedCategory === category ? 'active bg-gold' : ''
                }`}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Product List */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {currentProducts.map((product) => (
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
                      disabled={!product.is_enabled}
                      onClick={() => toggleWishlist(product)} 
                    >
                      <Heart 
                        size={24}
                        fill={wishlist.includes(product.id) ? '#795548' : 'none'}
                        className={product.is_enabled ? 'text-brown' : 'text-light'}
                      />
                    </button>
                    <button 
                      className="cart-btn p-0 bg-transparent border-0"
                      disabled={!product.is_enabled}
                      onClick={() => alert('Added to cart!')} 
                    >
                      <ShoppingCart 
                        size={24} 
                        className={product.is_enabled ? 'text-brown' : 'text-light'}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="container pb-5">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              {[...Array(totalPages)].map((_, index) => (
                <li 
                  key={index} 
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ProductPage;