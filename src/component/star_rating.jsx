import React from 'react'

export default function StarRating({count, value, inactiveColor='#ddd', 
  size=24, activeColor="#f00", onChange}) {
  const stars = new Array(count).fill('🟊');

  const handleChange = (e, value) => {
    const area = e.target.getBoundingClientRect();
    console.log({area}, e.clientX, e.clientY);

    // Check if half star 

    let isHalfStar = e.clientX > area.left && e.clientX < area.left + area.width/2;
    console.log({isHalfStar});

    if (typeof onChange !== "function") return; 
    if (!isHalfStar) return onChange(value + 1);
    if (isHalfStar) return onChange((value + 1) - 0.5);
  }

  return (
    <div>
      {
        stars.map((s, index) => {
          let style = inactiveColor;
          let className = "star fas fa-star";

          if (index < value ) {
            style = activeColor;
          }

          // Logic for half-start 
          if (index == Math.floor(value)) {
            if (!Number.isInteger(value)) {
              className = "fas fa-star-half-alt";
            }
          }

          return (
            <i key={index} className = {className}
              style={{color: style, width: size, height:size, fontSize:size}}
              onClick = {(e) => handleChange(e, index)}
            >
            </i>
          )
        })
     }
     {value}
    </div>
  )
}

