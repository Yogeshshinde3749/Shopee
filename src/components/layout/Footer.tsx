import React from 'react';
import { 
  FiTwitter, 
  FiFacebook, 
  FiInstagram, 
  FiYoutube,
  FiSmartphone,
  FiDownload,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi';

const Footer = () => {
  // Footer data structure
  const footerData = {
    customerService: [
      { name: "Help Center", link: "/help" },
      { name: "Fashion Blog", link: "/blog" },
      { name: "Luxury Mall", link: "/mall" },
      { name: "How To Buy", link: "/how-to-buy" },
      { name: "How To Sell", link: "/how-to-sell" },
      { name: "Payment Methods", link: "/payment" },
      { name: "Loyalty Points", link: "/points" },
      { name: "Shipping & Returns", link: "/shipping" },
      { name: "International Orders", link: "/international" },
      { name: "Contact Us", link: "/contact" }
    ],
    aboutUs: [
      { name: "About LUXE", link: "/about" },
      { name: "Career Opportunities", link: "/careers" },
      { name: "Company Policies", link: "/policies" },
      { name: "Privacy Policy", link: "/privacy" },
      { name: "Terms of Service", link: "/terms" },
      { name: "Affiliate Program", link: "/affiliate" },
      { name: "Media Contact", link: "/media" },
      { name: "Seller Center", link: "/seller" },
      { name: "Flash Sales", link: "/flash-deals" }
    ],
    quickLinks: [
      { name: "Track Your Order", link: "/track" },
      { name: "Shipping Information", link: "/shipping-info" },
      { name: "Return Policy", link: "/returns" },
      { name: "Size Guide", link: "/size-guide" },
      { name: "Gift Cards", link: "/gift-cards" },
      { name: "Bulk Orders", link: "/bulk" },
      { name: "Student Discount", link: "/student" },
      { name: "Wholesale", link: "/wholesale" }
    ],
    socialMedia: [
      { name: "Facebook", icon: FiFacebook, link: "https://facebook.com" },
      { name: "Twitter", icon: FiTwitter, link: "https://twitter.com" },
      { name: "Instagram", icon: FiInstagram, link: "https://instagram.com" },
      { name: "YouTube", icon: FiYoutube, link: "https://youtube.com" }
    ]
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-content">
                <h3 className="newsletter-title">Stay In Style</h3>
                <p className="newsletter-subtitle">
                  Subscribe to get exclusive offers, style tips, and be the first to know about new arrivals
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control newsletter-input" 
                    placeholder="Enter your email address"
                  />
                  <button className="btn newsletter-btn" type="button">
                    <FiMail className="me-2" />
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Brand Section */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="footer-section">
                <div className="brand-section">
                  <h2 className="brand-logo">Shopee</h2>
                  <p className="brand-description">
                    Discover luxury fashion that defines your unique style. 
                    Quality craftsmanship meets contemporary design.
                  </p>
                </div>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <FiPhone className="contact-icon" />
                    <span>+1 (800) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <FiMail className="contact-icon" />
                    <span>hello@luxefashion.com</span>
                  </div>
                  <div className="contact-item">
                    <FiMapPin className="contact-icon" />
                    <span>New York, NY 10001</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <div className="footer-section">
                <h4 className="footer-title">Customer Service</h4>
                <ul className="footer-links">
                  {footerData.customerService.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* About Us */}
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <div className="footer-section">
                <h4 className="footer-title">About LUXE</h4>
                <ul className="footer-links">
                  {footerData.aboutUs.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <div className="footer-section">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  {footerData.quickLinks.map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social & Apps */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-section">
                <h4 className="footer-title">Connect With Us</h4>
                
                {/* Social Media */}
                <div className="social-media mb-4">
                  <div className="social-links">
                    {footerData.socialMedia.map((social, index) => (
                      <a 
                        key={index}
                        href={social.link}
                        className="social-link"
                        aria-label={social.name}
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Apps */}
                <div className="mobile-apps">
                  <h5 className="apps-title">Download Our App</h5>
                  <div className="app-buttons">
                    <a href="#" className="app-button">
                      <FiSmartphone className="app-icon" />
                      <div className="app-text">
                        <span className="app-subtitle">Get it on</span>
                        <span className="app-title">Google Play</span>
                      </div>
                    </a>
                    <a href="#" className="app-button">
                      <FiDownload className="app-icon" />
                      <div className="app-text">
                        <span className="app-subtitle">Download on the</span>
                        <span className="app-title">App Store</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="copyright">
                <p>&copy; 2024 LUXE Fashion. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/shipping">Shipping Policy</a>
                <a href="/cookies">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;