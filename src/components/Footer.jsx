import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Wave Top */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C360,120 720,0 1080,80 C1260,120 1380,60 1440,40 L1440,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-col">
              <div className="footer-brand">
                <div className="footer-brand-icon">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3>Indian Public School</h3>
                  <p className="footer-tagline">Brahmabarada, Jajpur</p>
                </div>
              </div>
              <p className="footer-desc">
                Nurturing young minds with quality education, strong values, and a vibrant learning environment 
                in the heart of Brahmabarada, Jajpur, Odisha. Building tomorrow's leaders today.
              </p>
              <div className="footer-social">
                <motion.a href="#" whileHover={{ y: -4, scale: 1.1 }} className="social-icon facebook"><FaFacebookF /></motion.a>
                <motion.a href="#" whileHover={{ y: -4, scale: 1.1 }} className="social-icon twitter"><FaTwitter /></motion.a>
                <motion.a href="#" whileHover={{ y: -4, scale: 1.1 }} className="social-icon instagram"><FaInstagram /></motion.a>
                <motion.a href="#" whileHover={{ y: -4, scale: 1.1 }} className="social-icon youtube"><FaYoutube /></motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/academics">Academics</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Academics */}
            <div className="footer-col">
              <h4>Academics</h4>
              <ul>
                <li><a href="#">Pre-Primary (Nursery - UKG)</a></li>
                <li><a href="#">Primary (Class I - V)</a></li>
                <li><a href="#">Middle School (Class VI - VIII)</a></li>
                <li><a href="#">Secondary (Class IX - X)</a></li>
                <li><a href="#">Co-Curricular Activities</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4>Contact Info</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-icon" />
                  <span>Brahmabarada, Jajpur District, Odisha - 755019</span>
                </div>
                <div className="footer-contact-item">
                  <FaPhone className="footer-icon" />
                  <span>+91 9437XXXXXX</span>
                </div>
                <div className="footer-contact-item">
                  <FaEnvelope className="footer-icon" />
                  <span>info@ipsbrahmabarada.edu.in</span>
                </div>
                <div className="footer-contact-item">
                  <FaClock className="footer-icon" />
                  <span>Mon - Sat: 7:30 AM - 2:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p>© 2026 Indian Public School, Brahmabarada. All Rights Reserved.</p>
            <p className="footer-made">Made with ❤️ for the students of Brahmabarada</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
