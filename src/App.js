import React,{Component} from 'react';

class Twitter extends Component {

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }



  render(){
    return (
      <div>
        Teste
      </div>
    );
  };

}

export default Twitter;