import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHeart, FaStar, FaEye, FaBullseye, FaUsers, FaAward, FaBookReader, FaHandsHelping } from 'react-icons/fa'
import './About.css'

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

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg">
          <div className="header-shape s1"></div>
          <div className="header-shape s2"></div>
          <div className="header-shape s3"></div>
        </div>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1>About Our School 🏫</h1>
            <p>Learn about Indian Public School's journey, mission, and the values that drive us</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container">
          <AnimatedSection>
            <div className="story-grid">
              <motion.div className="story-image" variants={fadeInUp}>
                <svg viewBox="0 0 400 350" className="story-svg">
                  <rect x="10" y="10" width="380" height="330" rx="20" fill="#FFF8F0" stroke="#FF6B35" strokeWidth="2" strokeDasharray="8,4"/>
                  {/* Building */}
                  <rect x="100" y="100" width="200" height="200" rx="5" fill="#FF6B35" opacity="0.15"/>
                  <rect x="110" y="110" width="180" height="180" rx="5" fill="white"/>
                  <polygon points="100,105 200,40 300,105" fill="#FFD93D" opacity="0.8"/>
                  {/* Windows Row 1 */}
                  <rect x="130" y="130" width="35" height="30" rx="4" fill="#4ECDC4" opacity="0.6"/>
                  <rect x="182" y="130" width="35" height="30" rx="4" fill="#4ECDC4" opacity="0.6"/>
                  <rect x="234" y="130" width="35" height="30" rx="4" fill="#4ECDC4" opacity="0.6"/>
                  {/* Windows Row 2 */}
                  <rect x="130" y="180" width="35" height="30" rx="4" fill="#4ECDC4" opacity="0.6"/>
                  <rect x="182" y="180" width="35" height="30" rx="4" fill="#4ECDC4" opacity="0.6"/>
                  <rect x="234" y="180" width="35" height="30" rx="4" fill="#4ECDC4" opacity="0.6"/>
                  {/* Door */}
                  <rect x="178" y="240" width="44" height="50" rx="22" fill="#FF6B35" opacity="0.6"/>
                  {/* Flag */}
                  <line x1="200" y1="40" x2="200" y2="15" stroke="#636E72" strokeWidth="2"/>
                  <rect x="200" y="15" width="25" height="16" rx="2" fill="#FF6B35">
                    <animate attributeName="width" values="25;22;25" dur="2s" repeatCount="indefinite"/>
                  </rect>
                  {/* Stars around */}
                  <text x="60" y="70" fontSize="20" opacity="0.6">⭐</text>
                  <text x="340" y="80" fontSize="18" opacity="0.6">🌟</text>
                  <text x="50" y="250" fontSize="16" opacity="0.6">✨</text>
                  <text x="350" y="220" fontSize="20" opacity="0.5">📚</text>
                  {/* Kids */}
                  <text x="80" y="310" fontSize="28">👧</text>
                  <text x="130" y="320" fontSize="28">👦</text>
                  <text x="260" y="315" fontSize="28">👧</text>
                  <text x="310" y="310" fontSize="28">👦</text>
                </svg>
              </motion.div>
              <motion.div className="story-text" variants={fadeInUp}>
                <h2>Our Story ✨</h2>
                <p>
                  <strong>Indian Public School (IPS)</strong> was founded with a noble vision — to bring 
                  quality, English-medium education to the children of <strong>Brahmabarada, Jajpur district, Odisha</strong>.
                </p>
                <p>
                  What started as a small school with a handful of students has now grown into one of the most 
                  trusted educational institutions in the region. Over <strong>15+ years</strong>, we have shaped 
                  hundreds of young minds, instilling in them not just academic knowledge but also values of 
                  discipline, compassion, and leadership.
                </p>
                <p>
                  Our school is located in the peaceful town of Brahmabarada, providing the perfect environment 
                  for focused learning away from the distractions of big cities, yet equipped with modern facilities 
                  that rival urban schools.
                </p>
                <div className="story-badges">
                  <div className="story-badge"><FaAward /> 15+ Years</div>
                  <div className="story-badge"><FaUsers /> 500+ Students</div>
                  <div className="story-badge"><FaBookReader /> Quality Education</div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <AnimatedSection>
            <div className="vm-grid">
              <motion.div className="vm-card vision" variants={fadeInUp}>
                <div className="vm-icon"><FaEye /></div>
                <h3>Our Vision 👁️</h3>
                <p>
                  To be a beacon of quality education in rural Odisha, nurturing globally competent, 
                  morally upright, and socially responsible citizens who contribute positively to society 
                  and the nation.
                </p>
                <ul>
                  <li>Excellence in academics</li>
                  <li>Character building & values</li>
                  <li>Innovation in teaching</li>
                  <li>Inclusive education for all</li>
                </ul>
              </motion.div>
              <motion.div className="vm-card mission" variants={fadeInUp}>
                <div className="vm-icon"><FaBullseye /></div>
                <h3>Our Mission 🎯</h3>
                <p>
                  To provide holistic education that combines strong academics with character development, 
                  creative expression, and physical fitness, ensuring every child reaches their full potential.
                </p>
                <ul>
                  <li>Student-centered learning</li>
                  <li>Modern teaching methods</li>
                  <li>Safe & loving environment</li>
                  <li>Community partnerships</li>
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="section-title" variants={fadeInUp}>
              <h2>Our Core Values 💎</h2>
              <p>The pillars that guide everything we do at Indian Public School</p>
            </motion.div>
            <div className="values-grid">
              {[
                { icon: '🎓', title: 'Academic Excellence', desc: 'We strive for the highest standards in teaching and learning.', color: '#FF6B35' },
                { icon: '❤️', title: 'Compassion', desc: 'Every child is treated with love, respect, and understanding.', color: '#FF6B6B' },
                { icon: '🤝', title: 'Integrity', desc: 'Honesty and ethical behavior are the foundation of our community.', color: '#4ECDC4' },
                { icon: '🌱', title: 'Growth Mindset', desc: 'We encourage curiosity, creativity, and continuous improvement.', color: '#6BCB77' },
                { icon: '🏆', title: 'Discipline', desc: 'Self-discipline and responsibility prepare students for life success.', color: '#FFD93D' },
                { icon: '🌍', title: 'Social Responsibility', desc: 'We teach students to serve their community and respect diversity.', color: '#A78BFA' },
              ].map((value, i) => (
                <motion.div key={i} className="value-card" variants={fadeInUp} whileHover={{ y: -8, scale: 1.02 }}
                  style={{ borderTopColor: value.color }}>
                  <span className="value-emoji">{value.icon}</span>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Principal Message */}
      <section className="principal-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="principal-card" variants={fadeInUp}>
              <div className="principal-avatar">
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="55" fill="#FF6B35" opacity="0.15"/>
                  <circle cx="60" cy="45" r="22" fill="#FFD93D"/>
                  <rect x="38" y="70" width="44" height="35" rx="10" fill="#4ECDC4"/>
                  <circle cx="52" cy="42" r="3" fill="#2D3436"/>
                  <circle cx="68" cy="42" r="3" fill="#2D3436"/>
                  <path d="M54,52 Q60,58 66,52" fill="none" stroke="#2D3436" strokeWidth="2"/>
                  <rect x="40" y="30" width="40" height="5" rx="2" fill="#2D3436" opacity="0.5"/>
                </svg>
              </div>
              <div className="principal-text">
                <div className="principal-quote">"</div>
                <p>
                  Education is not just about grades and marks — it's about shaping kind, curious, and confident 
                  human beings. At Indian Public School Brahmabarada, we believe every child has unique potential 
                  waiting to bloom. Our dedicated team works tirelessly to create an environment where learning 
                  is joyful, where mistakes are stepping stones, and where every student feels valued and empowered.
                </p>
                <p>
                  I invite you to visit our school, meet our wonderful teachers, and see how we're making 
                  a difference in the lives of children across Jajpur district. Welcome to the IPS family!
                </p>
                <div className="principal-info">
                  <strong>From the Principal's Desk</strong>
                  <span>Indian Public School, Brahmabarada</span>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default About
