import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedBrand, setSelectedBrand] = useState(null)

  const brands = [
    'CHANEL', 
    'Jo Malone', 
    'Curology', 
    'Dior', 
    'Chloe', 
    'ZARA'
  ]

  // Placeholder product data (you'd typically fetch this from an API)
  const products = [
    { id: 1, brand: 'CHANEL', name: 'CHANEL Product 1', price: 100 },
    { id: 2, brand: 'CHANEL', name: 'CHANEL Product 2', price: 150 },
    { id: 3, brand: 'Jo Malone', name: 'Jo Malone Product 1', price: 80 },
    { id: 4, brand: 'Dior', name: 'Dior Product 1', price: 120 },
    // Add more products...
  ]

  // Filter products based on selected brand
  const filteredProducts = selectedBrand 
    ? products.filter(product => product.brand === selectedBrand)
    : products

  // Pagination logic
  const productsPerPage = 4
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div className="container-fluid">
      {/* Brand Subnav */}
      <div className="row mb-4">
        <div className="col-12">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid justify-content-start">
              <ul className="nav nav-pills">
                {brands.map((brand, index) => (
                  <li key={index} className="nav-item me-2">
                    <button 
                      className={`nav-link ${selectedBrand === brand ? 'active' : ''}`}
                      onClick={() => setSelectedBrand(brand)}
                    >
                      {brand}
                    </button>
                  </li>
                ))}
                {selectedBrand && (
                  <li className="nav-item">
                    <button 
                      className="nav-link text-danger"
                      onClick={() => setSelectedBrand(null)}
                    >
                      Clear Filter
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
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {currentProducts.map((product) => (
              <div key={product.id} className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Brand: {product.brand}</p>
                    <p className="card-text fw-bold">${product.price}</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary w-100">Add to Cart</button>
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