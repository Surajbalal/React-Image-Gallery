import React from 'react'

function ImageRend({image,title,key}) {
  // console.log({url})
      console.log({image})
  return (<>
 
 
    <ul className="flex ">
    <li key={key}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </li>
    </ul>


    </>
  )
}

export default ImageRend