import React from 'react'

const Gallery = () => {

    const images = [
        "https://placehold.co/400",
        "https://placehold.co/400",
        "https://placehold.co/400",
    ];

  return (
    <section>
        {
            images.map((src,index) => (
                <img key={index} src={src} alt={`Imagen ${index + 1}`} />
            ))
        }      
    </section>
  )
}

export default Gallery
