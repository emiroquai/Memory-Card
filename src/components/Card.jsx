/* eslint-disable react/prop-types */
import '../styles/Card.css'

export default function Card({ image, handleClick }) {

  return (
    <img 
      className="card" 
      onClick={handleClick}
      src={image}
    >
    </img>
  )

  
}
