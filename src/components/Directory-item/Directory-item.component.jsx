import React from 'react'
import './Directory-item.styles.scss'
import { useNavigate } from 'react-router-dom'
const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate()

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2 onClick={() => navigate(`${route}`)}>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem
