import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBook, FaFlask, FaCalculator, FaGlobe, FaPaintBrush, FaLaptop, FaLanguage, FaRunning } from 'react-icons/fa'
import './Academics.css'

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

const Academics = () => {
  const programs = [
    {
      emoji: '🧒',
      level: 'Pre-Primary Wing',
      classes: 'Nursery • LKG • UKG',
      age: 'Age 3-5 years',
      color: '#FF6B6B',
      description: 'Our pre-primary section provides a warm, colorful, and stimulating environment where little ones begin their learning journey through play, songs, stories, and creative activities.',
      features: ['Play-based Learning', 'ABC & Number Recognition', 'Rhymes & Storytelling', 'Art & Craft Activities', 'Motor Skill Development', 'Social Skills Building']
    },
    {
      emoji: '📖',
      level: 'Primary Wing',
      classes: 'Class I • II • III • IV • V',
      age: 'Age 6-10 years',
      color: '#4ECDC4',
      description: 'Strong foundation in core subjects with creative teaching methods. Students develop reading, writing, and mathematical skills along with environmental awareness.',
      features: ['English & Odia Language', 'Mathematics & Reasoning', 'Environmental Science', 'General Knowledge', 'Computer Basics', 'Value Education']
    },
    {
      emoji: '🔬',
      level: 'Middle School',
      classes: 'Class VI • VII • VIII',
      age: 'Age 11-13 years',
      color: '#2196F3',
      description: 'Students transition to subject-based learning with specialized teachers. Emphasis on conceptual understanding, practical experiments, and analytical thinking.',
      features: ['Science & Mathematics', 'Social Studies & History', 'English & Odia Literature', 'Computer Science', 'Physical Education', 'Art & Music']
    },
    {
      emoji: '🎓',
      level: 'Secondary School',
      classes: 'Class IX • X',
      age: 'Age 14-16 years',
      color: '#FF6B35',
      description: 'Focused board exam preparation with subject mastery. Students receive career guidance and are prepared for competitive examinations alongside board exams.',
      features: ['Board Exam Preparation', 'Science (Physics, Chemistry, Bio)', 'Advanced Mathematics', 'Mock Tests & Practice', 'Career Counseling', 'Competitive Exam Prep']
    }
  ]

  const subjects = [
    { icon: <FaBook />, name: 'English', color: '#FF6B35' },
    { icon: <FaLanguage />, name: 'Odia', color: '#4ECDC4' },
    { icon: <FaCalculator />, name: 'Mathematics', color: '#2196F3' },
    { icon: <FaFlask />, name: 'Science', color: '#6BCB77' },
    { icon: <FaGlobe />, name: 'Social Science', color: '#9B59B6' },
    { icon: <FaLaptop />, name: 'Computer Science', color: '#FF6B6B' },
    { icon: <FaPaintBrush />, name: 'Art & Craft', color: '#FFD93D' },
    { icon: <FaRunning />, name: 'Physical Education', color: '#A78BFA' },
  ]

  return (
    <div className="academics-page">
      {/* Header */}
      <section className="page-header">
        <div className="page-header-bg">
          <div className="header-shape s1"></div>
          <div className="header-shape s2"></div>
          <div className="header-shape s3"></div>
        </div>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1>Our Academics 📚</h1>
            <p>Comprehensive curriculum designed to nurture curiosity, creativity, and excellence at every level</p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="programs-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="section-title" variants={fadeInUp}>
              <h2>Academic Programs 🎯</h2>
              <p>From playful beginnings to ambitious futures — we have it all covered</p>
            </motion.div>
            {programs.map((prog, i) => (
              <motion.div 
                key={i} 
                className={`program-row ${i % 2 === 1 ? 'reverse' : ''}`}
                variants={fadeInUp}
              >
                <div className="program-visual">
                  <div className="program-emoji-big">{prog.emoji}</div>
                  <div className="program-age-badge" style={{ background: prog.color }}>{prog.age}</div>
                </div>
                <div className="program-info">
                  <div className="program-classes-badge" style={{ color: prog.color, borderColor: prog.color }}>
                    {prog.classes}
                  </div>
                  <h3 style={{ color: prog.color }}>{prog.level}</h3>
                  <p>{prog.description}</p>
                  <div className="program-features">
                    {prog.features.map((feat, j) => (
                      <span key={j} className="program-feature" style={{ background: `${prog.color}12`, color: prog.color }}>
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Subjects */}
      <section className="subjects-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="section-title" variants={fadeInUp}>
              <h2>Subjects We Teach 📝</h2>
              <p>A balanced curriculum covering all essential subjects</p>
            </motion.div>
            <div className="subjects-grid">
              {subjects.map((sub, i) => (
                <motion.div 
                  key={i} 
                  className="subject-card"
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.04 }}
                  style={{ '--sub-color': sub.color }}
                >
                  <div className="subject-icon">{sub.icon}</div>
                  <span>{sub.name}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="methodology-section">
        <div className="container">
          <AnimatedSection>
            <motion.div className="section-title" variants={fadeInUp}>
              <h2>Our Teaching Approach 🧠</h2>
              <p>We believe in making learning an exciting adventure, not a chore</p>
            </motion.div>
            <div className="methodology-grid">
              {[
                { emoji: '🎮', title: 'Interactive Learning', desc: 'Smart classrooms with digital tools for engaging, visual lessons that students love.' },
                { emoji: '🔬', title: 'Hands-on Experiments', desc: 'Well-equipped science labs where students learn by doing, not just reading.' },
                { emoji: '📊', title: 'Regular Assessments', desc: 'Continuous evaluation through tests, projects, and presentations to track progress.' },
                { emoji: '👩‍🏫', title: 'Individual Attention', desc: 'Small class sizes ensure every student gets personalized guidance and support.' },
                { emoji: '🏆', title: 'Competitive Preparation', desc: 'Training for Olympiads, quiz competitions, and other academic events.' },
                { emoji: '📚', title: 'Library & Resources', desc: 'Rich library collection with reference books, magazines, and digital resources.' },
              ].map((method, i) => (
                <motion.div key={i} className="method-card" variants={fadeInUp} whileHover={{ y: -6 }}>
                  <span className="method-emoji">{method.emoji}</span>
                  <h3>{method.title}</h3>
                  <p>{method.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Academics
