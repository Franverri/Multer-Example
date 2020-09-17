import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ImageContainer = ({ newImage }) => {
  const [images, setImages] = useState([]);
  const [fallback, setFallback] = useState('');
  const getImages = async() => {
    try {
      const res = await axios.get('http://localhost:3200/api/images');
      if(!res.data.files) {
        setFallback(res.data.msg);
        // return;
      } else {
        setImages(res.data.files);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getImages();
  }, [newImage]);

  const configureImage = (image) => {
    return 'http://localhost:3200/' + image;
  }

  return (
    <div>
      {images.length > 0 ?
        (
          images.map(image => (
            <img src={configureImage(image)} key={image} alt={image} width="200" heigth="200" />
          ))
        )
        :
        <div>
          <h1> {fallback} </h1>
          <hr />
          <h3>Upload images in the form below</h3>
        </div>
      }
    </div>
  );
}

export default ImageContainer;
