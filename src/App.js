import React from 'react';
import PetShop from './PetShop';

function App() {

  const handleClick = () => {
      console.log('Iniciando Banho...');
  }

  return (
    <PetShop
      dogs={2} 
      onClick={handleClick}
      status="false"
    />
  );
}


export default App;