/* eslint-disable react/prop-types */
import '../styles/Card.css'

export default function Card({ image, title, handleClick }) {

  return (
    <div 
      className="card" 
      onClick={handleClick}
      style={{ 
      backgroundImage: `url(${image})`,
      }}
    >
      <h3 className="cardTitle" >
         {title}
      </h3>
    </div>
  )

  
}
