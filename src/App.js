import React from 'react';
import {ThemeContext,themes} from './Themes';
import Card from './Card';

function App () {
  return (
    
      <ThemeContext.Provider value={themes.primary}>
        <Card/>
      </ThemeContext.Provider>
    
  );
}

export default App;