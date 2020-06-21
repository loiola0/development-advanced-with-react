import React,{Component} from 'react';
import ErrorImg from './error.jpg';
class ErrorBoundary extends Component{

    /**
     *  ErrorBoundary não campturam erros em:
     * Manipuladores de eventos.
     * Código assícronos(Ex: callbacks de setTimeOut ou requestAnimationFrame)
     * Renderização no servidor.
     * Error lançados na própria error boundary(ao invés de em seus filhos)
     */

    constructor(props){
        super(props)

        this.state = {
            hasError: false
        }

    }
    componentDidCatch(error,errorInfo){
        console.log('error', error);
        console.log('errorInfo', errorInfo);
        this.setState({
            hasError: true,
        })
    }

    render(){
      if(this.state.hasError){
          return <img src={ErrorImg}/>
      }
        return this.props.children;
    }
};

export default ErrorBoundary;