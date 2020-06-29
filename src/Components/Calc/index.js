import React from 'react';
import PropType from 'prop-types';

function Calc(props){
  const {min,max,onChange} = props;


    return (
       <div>
           <p>
               Valor Mínimo: {min}
           </p>

           <p>
               Valor Máximo: {max}
           </p>

           <input type="text" onChange={onChange}/>
       </div> 
    );
}

Calc.prototype = {
    min: PropType.number.isrequire,
    max: PropType.number.isrequire,
    onChange: PropType.func.isrequire
}

export default Calc;