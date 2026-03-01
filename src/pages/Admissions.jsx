import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { FaCalendarAlt, FaFileAlt, FaPhoneAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import './Admissions.css'

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

const Admissions = () => {
  const steps = [
    { num: '01', title: 'Enquiry & Visit', desc: 'Visit the school or call us to learn more. We welcome parents to tour our campus and meet our faculty.', icon: '📞', color: '#FF6B35' },
    { num: '02', title: 'Application Form', desc: 'Collect the admission form from the school office or download it. Fill in all required details.', icon: '📝', color: '#4ECDC4' },
    { num: '03', title: 'Submit Documents', desc: 'Submit the filled form along with required documents — birth certificate, transfer certificate, photos, etc.', icon: '📋', color: '#2196F3' },
    { num: '04', title: 'Interaction / Test', desc: 'A simple interaction (for pre-primary) or written test (for higher classes) to assess the student.', icon: '✍️', color: '#6BCB77' },
    { num: '05', title: 'Admission Confirmed', desc: 'Upon selection, pay the fees and complete the admission process. Welcome to the IPS family!', icon: '🎉', color: '#FFD93D' },
  ]

  const documents = [
    'Birth Certificate (Original + Photocopy)',
    'Transfer Certificate (TC) from previous school',
    'Report Card / Marksheet of previous class',
    'Aadhar Card of Student & Parent',
    'Passport-size Photographs (4 copies)',
    'Address Proof (Ration Card / Electricity Bill)',
    'Caste Certificate (if applicable)',
  ]

  const feeStructure = [
    { level: 'Pre-Primary (Nursery - UKG)', admission: '₹2,000 - ₹3,000', monthly: '₹500 - ₹800' },
    { level: 'Primary (Class I - V)', admission: '₹3,000 - ₹5,000', monthly: '₹800 - ₹1,200' },
    { level: 'Middle School (Class VI - VIII)', admission: '₹4,000 - ₹6,000', monthly: '₹1,000 - ₹1,500' },
    { level: 'Secondary (Class IX - X)', admission: '₹5,000 - ₹8,000', monthly: '₹1,200 - ₹2,000' },
  ]

  return (
    <div className="admissions-page">
      {/* Header */}
      <section className="page-header">
        <div className="page-header-bg">
          <div className="header-shape s1"></div>
          <div className="header-shape s2"></div>
          <div className="header-shape s3"></div>
        </div>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1>Admissions 2026-27 🎓</h1>
            <p>Join the Indian Public School family! Admissions are now open for all classes</p>
          </motion.div>
        </div>
      </section>

      {/* Admission Banner */}
      <section className="admission-banner">
        <div className="container">
          <AnimatedSection>
            <motion.div className="banner-card" variants={fadeInUp}>
              <div className="banner-content">
                <div className="banner-emoji">🎓</div>
                <div>
                  <h2>Admissions Open for 2026-27!</h2>
                  <p>Enroll your child today for the upcoming academic session.<br/>Limited seats available — apply early to secure your child's spot!</p>
                  <div className="banner-buttons">
                    <Link to="/contact" className="btn-primary">
                      <FaPhoneAlt /> Contact for Admission
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Admission Process */}
      <section className="process-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="section-title" variants={fadeInUp}>
              <h2>Admission Process 📋</h2>
              <p>Simple and transparent — here's how to enroll your child at IPS Brahmabarada</p>
            </motion.div>
            <div className="process-steps">
              {steps.map((step, i) => (
                <motion.div key={i} className="step-card" variants={fadeInUp} whileHover={{ y: -6 }}>
                  <div className="step-number" style={{ background: step.color }}>{step.num}</div>
                  <div className="step-emoji">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  {i < steps.length - 1 && <div className="step-connector"><FaArrowRight /></div>}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Documents Required */}
      <section className="documents-section">
        <div className="container">
          <AnimatedSection>
            <div className="docs-grid">
              <motion.div variants={fadeInUp}>
                <h2>Documents Required 📄</h2>
                <p>Please keep the following documents ready when applying for admission:</p>
                <ul className="docs-list">
                  {documents.map((doc, i) => (
                    <motion.li key={i} variants={fadeInUp}>
                      <FaCheckCircle className="doc-check" />
                      <span>{doc}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="docs-visual" variants={fadeInUp}>
                <svg viewBox="0 0 300 300" className="docs-svg">
                  <rect x="30" y="20" width="240" height="260" rx="20" fill="#FFF8F0" stroke="#FF6B35" strokeWidth="2"/>
                  <rect x="60" y="50" width="180" height="8" rx="4" fill="#FF6B35" opacity="0.3"/>
                  <rect x="60" y="70" width="140" height="6" rx="3" fill="#E0E0E0"/>
                  <rect x="60" y="85" width="160" height="6" rx="3" fill="#E0E0E0"/>
                  <rect x="60" y="100" width="120" height="6" rx="3" fill="#E0E0E0"/>
                  <circle cx="55" cy="130" r="8" fill="#6BCB77" opacity="0.5"/>
                  <text x="55" y="134" textAnchor="middle" fontSize="10" fill="white">✓</text>
                  <rect x="72" y="125" width="150" height="6" rx="3" fill="#E0E0E0"/>
                  <circle cx="55" cy="155" r="8" fill="#6BCB77" opacity="0.5"/>
                  <text x="55" y="159" textAnchor="middle" fontSize="10" fill="white">✓</text>
                  <rect x="72" y="150" width="130" height="6" rx="3" fill="#E0E0E0"/>
                  <circle cx="55" cy="180" r="8" fill="#6BCB77" opacity="0.5"/>
                  <text x="55" y="184" textAnchor="middle" fontSize="10" fill="white">✓</text>
                  <rect x="72" y="175" width="160" height="6" rx="3" fill="#E0E0E0"/>
                  <circle cx="55" cy="205" r="8" fill="#E0E0E0"/>
                  <rect x="72" y="200" width="140" height="6" rx="3" fill="#E0E0E0"/>
                  <rect x="60" y="230" width="80" height="30" rx="15" fill="#FF6B35" opacity="0.8"/>
                  <text x="100" y="250" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Submit</text>
                  <text x="250" y="270" fontSize="30" opacity="0.5">📎</text>
                </svg>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="fee-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="section-title" variants={fadeInUp}>
              <h2>Fee Structure 💰</h2>
              <p>Affordable quality education — our fee structure is designed to be accessible for all families</p>
            </motion.div>
            <motion.div className="fee-table-wrapper" variants={fadeInUp}>
              <table className="fee-table">
                <thead>
                  <tr>
                    <th>Academic Level</th>
                    <th>Admission Fee (One-time)</th>
                    <th>Monthly Tuition Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, i) => (
                    <tr key={i}>
                      <td><strong>{fee.level}</strong></td>
                      <td>{fee.admission}</td>
                      <td>{fee.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="fee-note">
                * Fees are approximate and may vary. Contact the school office for the exact fee structure. 
                Bus and other facility charges are additional. Sibling discounts may be available.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Admissions
