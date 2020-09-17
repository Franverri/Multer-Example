import React, {useState} from 'react';
import ImageContainer from './ImageContainer'
import ImageForm from './ImageForm'

const App = () => {
  const [newImage, setNewImage] = useState([]);

  //Para simular cambio de estado al no usar Redux
  const handleNewImage = () => {
    setNewImage([...newImage, "New Image!"])
  }

  return (
    <div>
      <h1>Henry - Multer Example</h1>
      <ImageContainer newImage={newImage} />
      <ImageForm handleNewImage={handleNewImage} />
    </div>
  );
}

export default App;
