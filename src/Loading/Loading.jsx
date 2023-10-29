import React from 'react'
import './Loading.css' // Create a CSS file to style your loading component

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div>Loading...</div>
    </div>
  )
}

export default Loading
