import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import './Contact.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}
function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={staggerContainer} className={className}>
      {children}
    </motion.div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    classFor: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ parentName: '', phone: '', email: '', studentName: '', classFor: '', message: '' })
  }

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt />, 
      title: 'Our Address', 
      lines: ['Indian Public School', 'Brahmabarada, Jajpur District', 'Odisha, India - 755019'],
      color: '#FF6B35'
    },
    { 
      icon: <FaPhone />, 
      title: 'Phone Number', 
      lines: ['+91 9437XXXXXX', '+91 6370XXXXXX'],
      color: '#4ECDC4'
    },
    { 
      icon: <FaEnvelope />, 
      title: 'Email Us', 
      lines: ['info@ipsbrahmabarada.edu.in', 'admissions@ipsbrahmabarada.edu.in'],
      color: '#2196F3'
    },
    { 
      icon: <FaClock />, 
      title: 'Office Hours', 
      lines: ['Monday - Saturday', '7:30 AM - 2:30 PM', 'Office: 9:00 AM - 4:00 PM'],
      color: '#6BCB77'
    },
  ]

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="page-header">
        <div className="page-header-bg">
          <div className="header-shape s1"></div>
          <div className="header-shape s2"></div>
          <div className="header-shape s3"></div>
        </div>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1>Contact Us 📞</h1>
            <p>We'd love to hear from you! Reach out for admissions, queries, or just to say hello</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards-section">
        <div className="container">
          <AnimatedSection>
            <div className="contact-cards-grid">
              {contactInfo.map((info, i) => (
                <motion.div 
                  key={i} 
                  className="contact-info-card"
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.03 }}
                  style={{ '--info-color': info.color }}
                >
                  <div className="info-card-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  {info.lines.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form & Map */}
      <section className="contact-form-section">
        <div className="container">
          <AnimatedSection>
            <div className="contact-grid">
              {/* Form */}
              <motion.div className="contact-form-wrapper" variants={fadeInUp}>
                <h2>Send Us a Message ✉️</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
                
                {submitted ? (
                  <motion.div 
                    className="form-success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <FaCheckCircle className="success-icon" />
                    <h3>Thank You! 🎉</h3>
                    <p>Your message has been received. We'll contact you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Parent / Guardian Name *</label>
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXXXXXXX"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label>Student Name</label>
                        <input
                          type="text"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          placeholder="Child's name"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Admission Enquiry For</label>
                      <select name="classFor" value={formData.classFor} onChange={handleChange}>
                        <option value="">Select Class</option>
                        <option value="nursery">Nursery</option>
                        <option value="lkg">LKG</option>
                        <option value="ukg">UKG</option>
                        <option value="1">Class I</option>
                        <option value="2">Class II</option>
                        <option value="3">Class III</option>
                        <option value="4">Class IV</option>
                        <option value="5">Class V</option>
                        <option value="6">Class VI</option>
                        <option value="7">Class VII</option>
                        <option value="8">Class VIII</option>
                        <option value="9">Class IX</option>
                        <option value="10">Class X</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Your Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you'd like to know about our school..."
                        rows={4}
                      />
                    </div>

                    <button type="submit" className="btn-primary submit-btn">
                      <FaPaperPlane /> Send Message
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Map & WhatsApp */}
              <motion.div className="contact-side" variants={fadeInUp}>
                {/* Map Placeholder */}
                <div className="map-wrapper">
                  <div className="map-placeholder">
                    <svg viewBox="0 0 400 300" className="map-svg">
                      <rect width="400" height="300" fill="#E8F8F5" rx="20"/>
                      {/* Roads */}
                      <line x1="0" y1="150" x2="400" y2="150" stroke="#B2BEC3" strokeWidth="8"/>
                      <line x1="200" y1="0" x2="200" y2="300" stroke="#B2BEC3" strokeWidth="6"/>
                      <line x1="50" y1="80" x2="350" y2="220" stroke="#DFE6E9" strokeWidth="4"/>
                      {/* Green areas */}
                      <rect x="20" y="20" width="80" height="60" rx="10" fill="#6BCB77" opacity="0.3"/>
                      <rect x="300" y="180" width="80" height="60" rx="10" fill="#6BCB77" opacity="0.3"/>
                      <rect x="30" y="200" width="60" height="50" rx="8" fill="#6BCB77" opacity="0.2"/>
                      {/* Buildings */}
                      <rect x="120" y="60" width="40" height="35" rx="4" fill="#DFE6E9"/>
                      <rect x="260" y="90" width="50" height="40" rx="4" fill="#DFE6E9"/>
                      <rect x="80" y="160" width="35" height="30" rx="4" fill="#DFE6E9"/>
                      <rect x="310" y="40" width="45" height="35" rx="4" fill="#DFE6E9"/>
                      {/* School marker */}
                      <circle cx="200" cy="130" r="25" fill="#FF6B35" opacity="0.2">
                        <animate attributeName="r" values="25;35;25" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.2;0.1;0.2" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="200" cy="130" r="12" fill="#FF6B35"/>
                      <text x="200" y="135" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">📍</text>
                      {/* Label */}
                      <rect x="140" y="95" width="120" height="25" rx="12" fill="white" filter="url(#shadow)"/>
                      <text x="200" y="112" textAnchor="middle" fill="#FF6B35" fontSize="10" fontWeight="bold">IPS Brahmabarada</text>
                      {/* Road labels */}
                      <text x="350" y="145" fill="#636E72" fontSize="8" opacity="0.6">Main Road</text>
                      <text x="210" y="30" fill="#636E72" fontSize="8" opacity="0.6">Brahmabarada</text>
                    </svg>
                  </div>
                  <p className="map-caption">📍 Indian Public School, Brahmabarada, Jajpur, Odisha</p>
                </div>

                {/* WhatsApp */}
                <a href="https://wa.me/919437000000" target="_blank" rel="noopener noreferrer" className="whatsapp-card">
                  <FaWhatsapp className="whatsapp-icon" />
                  <div>
                    <strong>Chat on WhatsApp</strong>
                    <span>Quick responses for admission queries</span>
                  </div>
                </a>

                {/* Quick FAQ */}
                <div className="quick-faq">
                  <h3>Quick Answers ❓</h3>
                  {[
                    { q: 'When do admissions open?', a: 'Admissions for 2026-27 are open now! Contact us for details.' },
                    { q: 'What board is the school affiliated to?', a: 'We follow the BSE Odisha / CBSE pattern curriculum.' },
                    { q: 'Is transport facility available?', a: 'Yes! School bus covers major areas in and around Brahmabarada.' },
                  ].map((faq, i) => (
                    <div key={i} className="faq-item">
                      <strong>{faq.q}</strong>
                      <p>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Contact
