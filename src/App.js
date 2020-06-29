import React from 'react';
import PhotosGallery from './Components/Gallery';


function App() {

  const photos = [
    'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/nature',
    'http://placeimg.com/140/60/sky',
    'http://placeimg.com/140/60/animals',
  ];

    return (
      <>
        <h1>Galeria de Fotos</h1>
          <PhotosGallery photos={photos}/>
      </>
    );
}


export default App;