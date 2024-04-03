/* eslint-disable react/prop-types */
import '../styles/Card.css'

export default function Card({ image, handleClick }) {

  return (
    <div 
      className="card" 
      onClick={handleClick}
      style={{backgroundImage: `url(${image})`}}
    >
    </div>
  )

  
}
