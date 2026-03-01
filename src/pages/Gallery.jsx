import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Gallery.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
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

const galleryItems = [
  { id: 1, category: 'campus', title: 'School Main Building', emoji: '🏫', color: '#FF6B35', desc: 'Our beautiful school building in Brahmabarada' },
  { id: 2, category: 'classroom', title: 'Smart Classroom', emoji: '💻', color: '#4ECDC4', desc: 'Modern classrooms with digital learning tools' },
  { id: 3, category: 'sports', title: 'Annual Sports Day', emoji: '🏆', color: '#6BCB77', desc: 'Students participating in sports competitions' },
  { id: 4, category: 'events', title: 'Republic Day Celebration', emoji: '🇮🇳', color: '#FF6B35', desc: 'Patriotic celebrations and flag hoisting' },
  { id: 5, category: 'classroom', title: 'Science Lab', emoji: '🔬', color: '#2196F3', desc: 'Hands-on science experiments and learning' },
  { id: 6, category: 'events', title: 'Annual Day Function', emoji: '🎭', color: '#9B59B6', desc: 'Cultural performances by our talented students' },
  { id: 7, category: 'campus', title: 'School Playground', emoji: '⚽', color: '#6BCB77', desc: 'Spacious playground for outdoor activities' },
  { id: 8, category: 'events', title: 'Saraswati Puja', emoji: '🙏', color: '#FFD93D', desc: 'Celebrating knowledge and learning' },
  { id: 9, category: 'classroom', title: 'Computer Lab', emoji: '🖥️', color: '#A78BFA', desc: 'Students learning computer skills' },
  { id: 10, category: 'sports', title: 'Cricket Tournament', emoji: '🏏', color: '#FF6B6B', desc: 'Inter-school cricket championship' },
  { id: 11, category: 'events', title: 'Independence Day', emoji: '🎪', color: '#FF6B35', desc: 'Flag hoisting and cultural programs' },
  { id: 12, category: 'campus', title: 'School Library', emoji: '📚', color: '#4ECDC4', desc: 'Well-stocked library with diverse books' },
  { id: 13, category: 'events', title: 'Children\'s Day', emoji: '🎈', color: '#FF6B6B', desc: 'Fun activities and games for students' },
  { id: 14, category: 'classroom', title: 'Art Room', emoji: '🎨', color: '#FFD93D', desc: 'Creative art and craft sessions' },
  { id: 15, category: 'sports', title: 'Yoga Session', emoji: '🧘', color: '#6BCB77', desc: 'Morning yoga and fitness activities' },
  { id: 16, category: 'campus', title: 'Assembly Ground', emoji: '🏛️', color: '#2196F3', desc: 'Morning assembly and prayer area' },
]

const categories = [
  { key: 'all', label: 'All Photos', emoji: '📸' },
  { key: 'campus', label: 'Campus', emoji: '🏫' },
  { key: 'classroom', label: 'Classrooms', emoji: '📖' },
  { key: 'sports', label: 'Sports', emoji: '⚽' },
  { key: 'events', label: 'Events', emoji: '🎉' },
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)

  const filtered = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (item) => setSelectedItem(item)
  const closeLightbox = () => setSelectedItem(null)
  const navigateGallery = (dir) => {
    if (!selectedItem) return
    const idx = filtered.findIndex(i => i.id === selectedItem.id)
    const next = (idx + dir + filtered.length) % filtered.length
    setSelectedItem(filtered[next])
  }

  return (
    <div className="gallery-page">
      {/* Header */}
      <section className="page-header">
        <div className="page-header-bg">
          <div className="header-shape s1"></div>
          <div className="header-shape s2"></div>
          <div className="header-shape s3"></div>
        </div>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1>School Gallery 📸</h1>
            <p>Explore beautiful moments captured at Indian Public School, Brahmabarada</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <AnimatedSection>
            {/* Filters */}
            <motion.div className="gallery-filters" variants={fadeInUp}>
              {categories.map(cat => (
                <button
                  key={cat.key}
                  className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  <span>{cat.emoji}</span> {cat.label}
                </button>
              ))}
            </motion.div>

            {/* Grid */}
            <motion.div className="gallery-grid" layout>
              <AnimatePresence mode="popLayout">
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    className="gallery-card"
                    variants={scaleIn}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    onClick={() => openLightbox(item)}
                    style={{ '--gallery-color': item.color }}
                  >
                    <div className="gallery-card-img">
                      <div className="gallery-placeholder" style={{ background: `${item.color}18` }}>
                        <span className="gallery-emoji">{item.emoji}</span>
                      </div>
                      <div className="gallery-card-overlay">
                        <span>Click to View</span>
                      </div>
                    </div>
                    <div className="gallery-card-info">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}><FaTimes /></button>
              <button className="lightbox-nav prev" onClick={() => navigateGallery(-1)}><FaChevronLeft /></button>
              <button className="lightbox-nav next" onClick={() => navigateGallery(1)}><FaChevronRight /></button>
              <div className="lightbox-image" style={{ background: `${selectedItem.color}20` }}>
                <span className="lightbox-emoji">{selectedItem.emoji}</span>
              </div>
              <div className="lightbox-info">
                <h3>{selectedItem.title}</h3>
                <p>{selectedItem.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
