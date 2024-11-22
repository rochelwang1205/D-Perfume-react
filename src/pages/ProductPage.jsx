import React, { useState, useEffect } from 'react'

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ec-course-api.hexschool.io/v2/api/hex-project/products/all')
        const data = await response.json()
        if (data.success) {
          setProducts(data.products)
          // Extract unique categories
          const uniqueCategories = [...new Set(data.products.map(product => product.category))]
          setCategories(uniqueCategories)
        }
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }
    
    fetchProducts()
  }, [])

  // Filter products based on selected category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products

  // Pagination logic
  const productsPerPage = 4
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  if (loading) {
    return (
      <div className="container-fluid">
        <div className="text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid">
      {/* Category Subnav */}
      <div className="row mb-4">
        <div className="col-12">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid justify-content-start">
              <ul className="nav nav-pills">
                {categories.map((category, index) => (
                  <li key={index} className="nav-item me-2">
                    <button 
                      className={`nav-link ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
                {selectedCategory && (
                  <li className="nav-item">
                    <button 
                      className="nav-link text-danger"
                      onClick={() => setSelectedCategory(null)}
                    >
                      清除篩選
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Product List */}
      <div className="row">
        <div className="col-12">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {currentProducts.map((product) => (
              <div key={product.id} className="col">
                <div className="card h-100">
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">類別: {product.category}</p>
                    <p className="card-text">容量: {product.unit}</p>
                    <p className="card-text">
                      <small className="text-muted text-decoration-line-through">
                        原價: ${product.origin_price}
                      </small>
                    </p>
                    <p className="card-text fw-bold text-danger">
                      特價: ${product.price}
                    </p>
                  </div>
                  <div className="card-footer">
                    <button 
                      className="btn btn-primary w-100"
                      disabled={!product.is_enabled}
                    >
                      {product.is_enabled ? '加入購物車' : '商品未上架'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center">
            <nav>
              <ul className="pagination">
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
        </div>
      )}
    </div>
  )
}

export default ProductPage