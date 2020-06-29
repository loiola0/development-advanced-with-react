import React,{useState} from 'react';
import Button from './Components/Button';
import Calc from './Components/Calc';


function App() {

  const [value,setValue] = useState(0);
  const [min,setMin] = useState(0);
  const [max,setMax] = useState(30);

  const handleClick = () => {
    setMin(10);
  }

  const handleCalc = ({target}) => {
      
      setValue(min+max);
  }

    return (
      <>
        <Button onClick={handleClick} >
            Adicionar no carrinho
        </Button>
       <br/>
        <div>
    <h1>Valor Calculado: {value}</h1>
          <Calc
            min={min}
            max={max}
            onChange={handleCalc}
          />
        </div>

      </>
    );
}


export default App;