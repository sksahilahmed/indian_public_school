import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { 
  FaGraduationCap, FaBook, FaUsers, FaTrophy, FaChalkboardTeacher, 
  FaFutbol, FaFlask, FaMusic, FaPaintBrush, FaLaptop, FaBus, FaShieldAlt,
  FaArrowRight, FaStar, FaHeart, FaChild, FaHandsHelping
} from 'react-icons/fa'
import { 
  MdScience, MdSportsCricket, MdLibraryBooks, MdCelebration 
} from 'react-icons/md'
import './Home.css'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const Home = () => {
  return (
    <div className="home">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-circle c1"></div>
          <div className="hero-circle c2"></div>
          <div className="hero-circle c3"></div>
          <div className="hero-blob"></div>
        </div>

        {/* Animated Clouds */}
        <div className="hero-clouds">
          <div className="cloud cloud-1">☁️</div>
          <div className="cloud cloud-2">☁️</div>
          <div className="cloud cloud-3">⛅</div>
        </div>

        <div className="container hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              🏫 Welcome to IPS Brahmabarada
            </motion.div>
            
            <h1>
              <span className="hero-title-line1">Where Young</span>
              <span className="hero-title-line2">Minds Blossom</span>
              <span className="hero-title-line3">& Dreams Take Flight ✨</span>
            </h1>
            
            <p className="hero-subtitle">
              Indian Public School, Brahmabarada, Jajpur, Odisha — Providing quality education 
              from Nursery to Class X with loving care, modern facilities, and a commitment 
              to shaping future leaders.
            </p>

            <div className="hero-buttons">
              <Link to="/admissions" className="btn-primary btn-glow">
                <FaGraduationCap /> Admissions Open 2026-27 <FaArrowRight />
              </Link>
              <Link to="/about" className="btn-secondary">
                Explore Our School
              </Link>
            </div>

            <div className="hero-stats">
              <motion.div className="hero-stat" variants={scaleIn}>
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Students</span>
              </motion.div>
              <motion.div className="hero-stat" variants={scaleIn}>
                <span className="stat-number">30+</span>
                <span className="stat-label">Expert Teachers</span>
              </motion.div>
              <motion.div className="hero-stat" variants={scaleIn}>
                <span className="stat-number">15+</span>
                <span className="stat-label">Years of Trust</span>
              </motion.div>
              <motion.div className="hero-stat" variants={scaleIn}>
                <span className="stat-number">95%</span>
                <span className="stat-label">Pass Rate</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="hero-illustration">
              {/* Big School House SVG */}
              <svg viewBox="0 0 400 400" className="school-svg">
                {/* Sky */}
                <circle cx="320" cy="60" r="30" fill="#FFD93D" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
                </circle>
                {/* Sun rays */}
                <g opacity="0.3">
                  <line x1="320" y1="20" x2="320" y2="5" stroke="#FFD93D" strokeWidth="3">
                    <animate attributeName="y2" values="5;0;5" dur="2s" repeatCount="indefinite"/>
                  </line>
                  <line x1="350" y1="35" x2="365" y2="25" stroke="#FFD93D" strokeWidth="3"/>
                  <line x1="355" y1="60" x2="370" y2="60" stroke="#FFD93D" strokeWidth="3"/>
                  <line x1="290" y1="35" x2="275" y2="25" stroke="#FFD93D" strokeWidth="3"/>
                  <line x1="285" y1="60" x2="270" y2="60" stroke="#FFD93D" strokeWidth="3"/>
                </g>
                {/* Ground */}
                <ellipse cx="200" cy="360" rx="180" ry="25" fill="#6BCB77" opacity="0.3"/>
                {/* School Building */}
                <rect x="80" y="160" width="240" height="190" rx="8" fill="#FF6B35" opacity="0.95"/>
                <rect x="90" y="170" width="220" height="170" rx="5" fill="white"/>
                {/* Roof */}
                <polygon points="60,165 200,80 340,165" fill="#FFD93D"/>
                <polygon points="80,165 200,95 320,165" fill="#FF6B35" opacity="0.2"/>
                {/* Flag */}
                <line x1="200" y1="80" x2="200" y2="40" stroke="#636E72" strokeWidth="3"/>
                <rect x="200" y="40" width="35" height="22" rx="2" fill="#FF6B35">
                  <animate attributeName="width" values="35;32;35" dur="2s" repeatCount="indefinite"/>
                </rect>
                {/* Windows */}
                <rect x="110" y="195" width="40" height="45" rx="5" fill="#4ECDC4" opacity="0.7"/>
                <rect x="110" y="195" width="40" height="22" rx="5" fill="#4ECDC4"/>
                <line x1="130" y1="195" x2="130" y2="240" stroke="white" strokeWidth="2"/>
                <line x1="110" y1="217" x2="150" y2="217" stroke="white" strokeWidth="2"/>
                
                <rect x="180" y="195" width="40" height="45" rx="5" fill="#4ECDC4" opacity="0.7"/>
                <rect x="180" y="195" width="40" height="22" rx="5" fill="#4ECDC4"/>
                <line x1="200" y1="195" x2="200" y2="240" stroke="white" strokeWidth="2"/>
                <line x1="180" y1="217" x2="220" y2="217" stroke="white" strokeWidth="2"/>
                
                <rect x="250" y="195" width="40" height="45" rx="5" fill="#4ECDC4" opacity="0.7"/>
                <rect x="250" y="195" width="40" height="22" rx="5" fill="#4ECDC4"/>
                <line x1="270" y1="195" x2="270" y2="240" stroke="white" strokeWidth="2"/>
                <line x1="250" y1="217" x2="290" y2="217" stroke="white" strokeWidth="2"/>
                {/* Door */}
                <rect x="175" y="280" width="50" height="60" rx="25" fill="#FF6B35"/>
                <rect x="180" y="285" width="40" height="55" rx="20" fill="#2D3436" opacity="0.3"/>
                <circle cx="210" cy="312" r="3" fill="#FFD93D"/>
                {/* Clock */}
                <circle cx="200" cy="150" r="20" fill="white" stroke="#FF6B35" strokeWidth="3"/>
                <line x1="200" y1="150" x2="200" y2="138" stroke="#2D3436" strokeWidth="2"/>
                <line x1="200" y1="150" x2="210" y2="150" stroke="#FF6B35" strokeWidth="2"/>
                {/* IPS Text */}
                <text x="200" y="177" textAnchor="middle" fill="#FF6B35" fontSize="14" fontWeight="bold" fontFamily="sans-serif">IPS</text>
                {/* Trees */}
                <circle cx="45" cy="300" r="28" fill="#6BCB77"/>
                <circle cx="35" cy="285" r="22" fill="#6BCB77" opacity="0.8"/>
                <circle cx="55" cy="290" r="20" fill="#4ECDC4" opacity="0.5"/>
                <rect x="42" y="320" width="6" height="30" rx="3" fill="#8B6F47"/>
                
                <circle cx="360" cy="310" r="24" fill="#6BCB77"/>
                <circle cx="350" cy="296" r="20" fill="#6BCB77" opacity="0.8"/>
                <rect x="357" y="328" width="6" height="25" rx="3" fill="#8B6F47"/>
                {/* Kids */}
                <g transform="translate(90, 330)">
                  <circle cx="0" cy="0" r="8" fill="#FFD93D"/>
                  <rect x="-5" y="8" width="10" height="16" rx="3" fill="#FF6B6B"/>
                  <line x1="-3" y1="24" x2="-6" y2="35" stroke="#2D3436" strokeWidth="2"/>
                  <line x1="3" y1="24" x2="6" y2="35" stroke="#2D3436" strokeWidth="2"/>
                </g>
                <g transform="translate(115, 328)">
                  <circle cx="0" cy="0" r="8" fill="#FFD93D"/>
                  <rect x="-5" y="8" width="10" height="16" rx="3" fill="#4ECDC4"/>
                  <line x1="-3" y1="24" x2="-6" y2="35" stroke="#2D3436" strokeWidth="2"/>
                  <line x1="3" y1="24" x2="6" y2="35" stroke="#2D3436" strokeWidth="2"/>
                </g>
                <g transform="translate(295, 332)">
                  <circle cx="0" cy="0" r="8" fill="#FFD93D"/>
                  <rect x="-5" y="8" width="10" height="16" rx="3" fill="#A78BFA"/>
                  <line x1="-3" y1="24" x2="-6" y2="35" stroke="#2D3436" strokeWidth="2"/>
                  <line x1="3" y1="24" x2="6" y2="35" stroke="#2D3436" strokeWidth="2"/>
                </g>
                {/* Birds */}
                <path d="M60,50 Q70,40 80,50" fill="none" stroke="#636E72" strokeWidth="2" opacity="0.5">
                  <animateTransform attributeName="transform" type="translate" values="0,0;10,-5;20,0" dur="4s" repeatCount="indefinite"/>
                </path>
                <path d="M100,35 Q108,27 116,35" fill="none" stroke="#636E72" strokeWidth="2" opacity="0.4">
                  <animateTransform attributeName="transform" type="translate" values="0,0;8,-3;16,0" dur="5s" repeatCount="indefinite"/>
                </path>
              </svg>
            </div>

            {/* Floating Cards on Hero */}
            <motion.div 
              className="hero-float-card card-books"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              📚 Smart Classes
            </motion.div>
            <motion.div 
              className="hero-float-card card-sports"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              🏆 Champions
            </motion.div>
            <motion.div 
              className="hero-float-card card-love"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              💛 Love & Care
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </section>

      {/* ===== WELCOME MESSAGE ===== */}
      <section className="welcome-section">
        <div className="container">
          <AnimatedSection>
            <div className="welcome-grid">
              <motion.div className="welcome-image" variants={fadeInUp}>
                <div className="welcome-img-wrapper">
                  <svg viewBox="0 0 300 300" className="welcome-svg">
                    <rect x="20" y="30" width="260" height="250" rx="20" fill="#FFF8F0" stroke="#FF6B35" strokeWidth="3"/>
                    <rect x="40" y="60" width="100" height="70" rx="10" fill="#4ECDC4" opacity="0.3"/>
                    <rect x="160" y="60" width="100" height="70" rx="10" fill="#FFD93D" opacity="0.3"/>
                    <rect x="40" y="150" width="220" height="5" rx="3" fill="#E0E0E0"/>
                    <rect x="40" y="165" width="180" height="5" rx="3" fill="#E0E0E0"/>
                    <rect x="40" y="180" width="200" height="5" rx="3" fill="#E0E0E0"/>
                    <rect x="40" y="200" width="80" height="30" rx="15" fill="#FF6B35"/>
                    <text x="80" y="220" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Read More</text>
                    <circle cx="90" cy="95" r="20" fill="#FF6B35" opacity="0.5"/>
                    <text x="90" y="100" textAnchor="middle" fill="white" fontSize="18">📖</text>
                    <circle cx="210" cy="95" r="20" fill="#6BCB77" opacity="0.5"/>
                    <text x="210" y="100" textAnchor="middle" fill="white" fontSize="18">🎓</text>
                    <circle cx="250" y="250" r="15" fill="#FFD93D" opacity="0.6"/>
                    <text x="250" y="255" textAnchor="middle" fontSize="14">⭐</text>
                  </svg>
                </div>
                <div className="welcome-badge-float">
                  <span>🌟</span> Trusted by Parents
                </div>
              </motion.div>
              <motion.div className="welcome-text" variants={fadeInUp}>
                <div className="section-title" style={{ textAlign: 'left' }}>
                  <h2 style={{ display: 'block' }}>Welcome to Our School Family! 🎉</h2>
                </div>
                <p>
                  <strong>Indian Public School (IPS), Brahmabarada</strong> is one of the leading English-medium 
                  schools in Jajpur District, Odisha. Established with a vision to provide affordable, 
                  high-quality education, we have been nurturing young minds for over 15 years.
                </p>
                <p>
                  Located in the serene town of Brahmabarada, our school offers a perfect blend of 
                  academic excellence, co-curricular activities, and character building. Our dedicated 
                  faculty ensures every child receives individual attention and grows to their full potential.
                </p>
                <div className="welcome-highlights">
                  <div className="highlight-item">
                    <FaStar className="highlight-icon" style={{ color: '#FFD93D' }} />
                    <span>CBSE/BSE Affiliated Curriculum</span>
                  </div>
                  <div className="highlight-item">
                    <FaHeart className="highlight-icon" style={{ color: '#FF6B6B' }} />
                    <span>Safe & Nurturing Environment</span>
                  </div>
                  <div className="highlight-item">
                    <FaChild className="highlight-icon" style={{ color: '#4ECDC4' }} />
                    <span>Holistic Child Development</span>
                  </div>
                  <div className="highlight-item">
                    <FaHandsHelping className="highlight-icon" style={{ color: '#6BCB77' }} />
                    <span>Community Focused Values</span>
                  </div>
                </div>
                <Link to="/about" className="btn-primary">
                  Know More About Us <FaArrowRight />
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="section-title" variants={fadeInUp}>
              <h2>Why Choose Indian Public School? 🌈</h2>
              <p>We don't just teach — we inspire, nurture, and empower every young mind to shine!</p>
            </motion.div>
            <div className="why-grid">
              {[
                { icon: <FaChalkboardTeacher />, title: 'Expert Faculty', desc: 'Experienced and passionate teachers dedicated to each student\'s growth and learning journey.', color: '#FF6B35', bg: '#FFF0E5' },
                { icon: <FaFlask />, title: 'Science Lab', desc: 'Well-equipped science laboratories for hands-on experiments and practical learning.', color: '#4ECDC4', bg: '#E8F8F5' },
                { icon: <FaLaptop />, title: 'Smart Classes', desc: 'Digital classrooms with interactive whiteboards and modern teaching aids.', color: '#2196F3', bg: '#E3F2FD' },
                { icon: <FaFutbol />, title: 'Sports & Fitness', desc: 'Expansive playground with facilities for cricket, football, athletics, and indoor games.', color: '#6BCB77', bg: '#E8F5E9' },
                { icon: <FaBus />, title: 'Transport Facility', desc: 'Safe and comfortable school bus service covering all major areas around Brahmabarada.', color: '#FF6B6B', bg: '#FFF0F0' },
                { icon: <FaShieldAlt />, title: 'Safe Campus', desc: 'CCTV monitored, secure campus with friendly staff ensuring your child\'s safety.', color: '#9B59B6', bg: '#F3E5F5' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="why-card"
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.03 }}
                  style={{ '--card-color': item.color, '--card-bg': item.bg }}
                >
                  <div className="why-card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="why-card-decoration"></div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ACADEMICS PREVIEW ===== */}
      <section className="academics-preview">
        <div className="container">
          <AnimatedSection>
            <motion.div className="section-title" variants={fadeInUp}>
              <h2>Our Academic Programs 📚</h2>
              <p>From tiny tots to confident teens — we have a program for every stage of learning</p>
            </motion.div>
            <div className="academic-cards">
              {[
                { emoji: '🧒', level: 'Pre-Primary', classes: 'Nursery, LKG, UKG', desc: 'Play-based learning with ABC, rhymes, art, and fun activities in a colorful environment.', color: '#FF6B6B', accent: '#FFD93D' },
                { emoji: '📖', level: 'Primary', classes: 'Class I - V', desc: 'Strong foundation in English, Odia, Maths, Science & EVS with creative teaching methods.', color: '#4ECDC4', accent: '#6BCB77' },
                { emoji: '🔬', level: 'Middle School', classes: 'Class VI - VIII', desc: 'Advanced learning with subject specialization, lab work, and competitive exam preparation.', color: '#2196F3', accent: '#A78BFA' },
                { emoji: '🎓', level: 'Secondary', classes: 'Class IX - X', desc: 'Board exam preparation with focused study, mock tests, and career guidance.', color: '#FF6B35', accent: '#FFD93D' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="academic-card"
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  style={{ '--ac-color': item.color, '--ac-accent': item.accent }}
                >
                  <div className="academic-card-emoji">{item.emoji}</div>
                  <div className="academic-card-badge">{item.classes}</div>
                  <h3>{item.level}</h3>
                  <p>{item.desc}</p>
                  <Link to="/academics" className="academic-card-link">
                    Learn More <FaArrowRight />
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== STATS COUNTER ===== */}
      <section className="stats-section">
        <div className="container">
          <AnimatedSection>
            <div className="stats-grid">
              {[
                { icon: <FaUsers />, number: '500+', label: 'Students Enrolled', color: '#FF6B35' },
                { icon: <FaChalkboardTeacher />, number: '30+', label: 'Qualified Teachers', color: '#4ECDC4' },
                { icon: <FaTrophy />, number: '50+', label: 'Awards & Prizes', color: '#FFD93D' },
                { icon: <FaGraduationCap />, number: '15+', label: 'Years of Excellence', color: '#6BCB77' },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="stat-card"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-card-icon" style={{ color: stat.color }}>{stat.icon}</div>
                  <div className="stat-card-number" style={{ color: stat.color }}>{stat.number}</div>
                  <div className="stat-card-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ACTIVITIES ===== */}
      <section className="activities-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="section-title" variants={fadeInUp}>
              <h2>Beyond the Classroom 🎨</h2>
              <p>We believe in all-round development — academics, sports, arts, and life skills</p>
            </motion.div>
            <div className="activities-grid">
              {[
                { icon: <MdSportsCricket />, title: 'Cricket & Sports', color: '#6BCB77' },
                { icon: <FaPaintBrush />, title: 'Art & Craft', color: '#FF6B6B' },
                { icon: <FaMusic />, title: 'Music & Dance', color: '#A78BFA' },
                { icon: <MdScience />, title: 'Science Club', color: '#4ECDC4' },
                { icon: <MdLibraryBooks />, title: 'Library & Reading', color: '#2196F3' },
                { icon: <MdCelebration />, title: 'Cultural Events', color: '#FF6B35' },
                { icon: <FaLaptop />, title: 'Computer Lab', color: '#9B59B6' },
                { icon: <FaTrophy />, title: 'Competitions', color: '#FFD93D' },
              ].map((act, i) => (
                <motion.div 
                  key={i} 
                  className="activity-card"
                  variants={scaleIn}
                  whileHover={{ y: -8, rotate: 2 }}
                >
                  <div className="activity-icon" style={{ color: act.color, background: `${act.color}15` }}>
                    {act.icon}
                  </div>
                  <span>{act.title}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="section-title" variants={fadeInUp}>
              <h2>What Parents Say 💬</h2>
              <p>Hear from our happy school family about their experience with IPS Brahmabarada</p>
            </motion.div>
            <div className="testimonial-grid">
              {[
                { name: 'Mrs. Snigdha Panda', role: 'Parent of Class V Student', text: 'IPS Brahmabarada has been a wonderful journey for my child. The teachers are caring and attentive. My son loves going to school every day!', rating: 5 },
                { name: 'Mr. Rajesh Sahoo', role: 'Parent of Class VIII Student', text: 'The discipline, values, and academic standards at Indian Public School are exceptional. My daughter has shown tremendous improvement since joining.', rating: 5 },
                { name: 'Mrs. Mamata Jena', role: 'Parent of LKG Student', text: 'The pre-primary section is amazing! The colorful classrooms, friendly teachers, and play-based learning make my little one so happy. Best school in Brahmabarada!', rating: 5 },
              ].map((test, i) => (
                <motion.div 
                  key={i} 
                  className="testimonial-card"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="testimonial-stars">
                    {[...Array(test.rating)].map((_, j) => (
                      <FaStar key={j} className="star-icon" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{test.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <strong>{test.name}</strong>
                      <span>{test.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="cta-content" variants={fadeInUp}>
              <div className="cta-emojis">🎓 📚 ✨ 🏆</div>
              <h2>Ready to Give Your Child the Best Education?</h2>
              <p>
                Admissions are now open for 2026-27 at Indian Public School, Brahmabarada. 
                Join our family and watch your child grow into a confident, knowledgeable, and compassionate individual.
              </p>
              <div className="cta-buttons">
                <Link to="/admissions" className="btn-primary btn-lg">
                  <FaGraduationCap /> Apply for Admission
                </Link>
                <Link to="/contact" className="btn-secondary btn-lg">
                  📞 Call Us Today
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Home
