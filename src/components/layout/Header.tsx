"use client"
import { useState } from 'react';
import { 
  FiSearch, 
  FiShoppingBag, 
  FiHeart, 
  FiUser, 
  FiMenu, 
  FiX,
  FiChevronDown 
} from 'react-icons/fi';
import "../../styles/header.scss"
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  // Categories JSON data
  const categories = [
    {
      id: 1,
      name: "Women",
      subcategories: [
        { id: 11, name: "Dresses", link: "/women/dresses" },
        { id: 12, name: "Tops & Blouses", link: "/women/tops" },
        { id: 13, name: "Bottoms", link: "/women/bottoms" },
        { id: 14, name: "Outerwear", link: "/women/outerwear" },
        { id: 15, name: "Activewear", link: "/women/activewear" },
        { id: 16, name: "Lingerie", link: "/women/lingerie" }
      ]
    },
    {
      id: 2,
      name: "Men",
      subcategories: [
        { id: 21, name: "Shirts", link: "/men/shirts" },
        { id: 22, name: "T-Shirts", link: "/men/tshirts" },
        { id: 23, name: "Pants", link: "/men/pants" },
        { id: 24, name: "Jackets", link: "/men/jackets" },
        { id: 25, name: "Activewear", link: "/men/activewear" },
        { id: 26, name: "Accessories", link: "/men/accessories" }
      ]
    },
    {
      id: 3,
      name: "Kids",
      subcategories: [
        { id: 31, name: "Boys", link: "/kids/boys" },
        { id: 32, name: "Girls", link: "/kids/girls" },
        { id: 33, name: "Baby", link: "/kids/baby" },
        { id: 34, name: "Shoes", link: "/kids/shoes" },
        { id: 35, name: "Accessories", link: "/kids/accessories" }
      ]
    },
    {
      id: 4,
      name: "Accessories",
      subcategories: [
        { id: 41, name: "Bags", link: "/accessories/bags" },
        { id: 42, name: "Jewelry", link: "/accessories/jewelry" },
        { id: 43, name: "Watches", link: "/accessories/watches" },
        { id: 44, name: "Sunglasses", link: "/accessories/sunglasses" },
        { id: 45, name: "Belts", link: "/accessories/belts" }
      ]
    },
    {
      id: 5,
      name: "Sale",
      subcategories: [
        { id: 51, name: "Women's Sale", link: "/sale/women" },
        { id: 52, name: "Men's Sale", link: "/sale/men" },
        { id: 53, name: "Kids' Sale", link: "/sale/kids" },
        { id: 54, name: "Clearance", link: "/sale/clearance" }
      ]
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="top-bar-left">
                <span className="top-text">Free shipping on orders over $100</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="top-bar-right">
                <span className="top-text">Customer Service: 1-800-123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-6 col-md-3 col-lg-2">
              <div className="logo">
                <h1 className="logo-text">Shopee</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="col-lg-6 d-none d-lg-block">
              <nav className="main-nav">
                <ul className="nav-list text-dark">
                  {categories.map((category) => (
                    <li 
                      key={category.id}
                      className="nav-item"
                      onMouseEnter={() => handleCategoryHover(category.id)}
                      onMouseLeave={handleCategoryLeave}
                    >
                      <a href="#" className="nav-link">
                        {category.name}
                        <FiChevronDown className="dropdown-icon" />
                      </a>
                      

                      
                      {/* Dropdown Menu */}
                      {activeCategory === category.id && (
                        <div className="dropdown-menu-container">
                          <div className="dropdown-content">
                            {category.subcategories.map((sub) => (
                              <a 
                                key={sub.id}
                                href={sub.link}
                                className="dropdown-item"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Search & Actions */}
            <div className="col-6 col-md-9 col-lg-4">
              <div className="header-actions">
                {/* Search Bar */}
                <div className="search-bar d-none d-md-flex">
                  <input 
                    type="text" 
                    placeholder="Search for products..."
                    className="search-input"
                  />
                  <button className="search-btn">
                    <FiSearch />
                  </button>
                </div>

                {/* Action Icons */}
                <div className="action-icons">
                  <button className="action-btn d-md-none">
                    <FiSearch />
                  </button>
                  {/* <button className="action-btn">
                    <FiUser />
                  </button> */}
                  <Link href="/login" className='action-btn'>Login</Link>
                  <button className="action-btn">
                    <FiHeart />
                    <span className="badge">2</span>
                  </button>
                  <button className="action-btn">
                    <FiShoppingBag />
                    <span className="badge">3</span>
                  </button>
                  <button 
                    className="mobile-menu-btn d-lg-none"
                    onClick={toggleMenu}
                  >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu d-lg-none">
          <div className="mobile-search">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search for products..."
                className="search-input"
              />
              <button className="search-btn">
                <FiSearch />
              </button>
            </div>
          </div>
          
          <nav className="mobile-nav">
            {categories.map((category) => (
              <div key={category.id} className="mobile-category">
                <div className="mobile-category-header">
                  <span className="mobile-category-name">{category.name}</span>
                </div>
                <div className="mobile-subcategories">
                  {category.subcategories.map((sub) => (
                    <a 
                      key={sub.id}
                      href={sub.link}
                      className="mobile-subcategory-link"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;