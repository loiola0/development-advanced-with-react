import React from 'react';
import PropTypes from 'prop-types';

function PetShop(props){
    const {dogs,cats,customers,customersName,onClick} = props;

    return(
        <div>
            <h1>Dogs: {dogs}</h1>
            <h1>Cats: {cats}</h1>
              <div>
                  Quantidade de Clientes: {customers}
              </div>
              <div>
                  Nome do Cliente: {customersName}
              </div>
              <button onClick={onClick}>Iniciar Banho</button>
        </div>
    );

}

PetShop.defaultProps = {
    cats: 0,
    customers: [],
}




PetShop.prototype = {
    dogs: PropTypes.number.isRequired,
    cats: PropTypes.number,
    customers: PropTypes.array,
    customersName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    status: PropTypes.oneOf(['completed','disable']),
}

export default PetShop;