import React from 'react'
import './FloatingElements.css'

const FloatingElements = () => {
  return (
    <div className="floating-elements" aria-hidden="true">
      {/* Floating Stars */}
      <div className="floating-star" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>⭐</div>
      <div className="floating-star" style={{ top: '20%', right: '8%', animationDelay: '1s' }}>✨</div>
      <div className="floating-star" style={{ top: '60%', left: '3%', animationDelay: '2s' }}>🌟</div>
      <div className="floating-star" style={{ top: '80%', right: '5%', animationDelay: '0.5s' }}>⭐</div>
      
      {/* Floating Shapes */}
      <div className="floating-shape shape-circle" style={{ top: '15%', right: '15%', animationDelay: '0.3s' }}></div>
      <div className="floating-shape shape-triangle" style={{ top: '45%', left: '8%', animationDelay: '1.5s' }}></div>
      <div className="floating-shape shape-square" style={{ top: '70%', right: '12%', animationDelay: '2.5s' }}></div>
      <div className="floating-shape shape-circle small" style={{ top: '35%', right: '4%', animationDelay: '0.8s' }}></div>
      <div className="floating-shape shape-dot" style={{ top: '55%', left: '12%', animationDelay: '1.2s' }}></div>
    </div>
  )
}

export default FloatingElements
