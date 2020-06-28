import React,{useRef,useEffect,useState} from 'react';


function App() {
  const inputRef = useRef();
  const count = useRef(1);
  const [value,setValue] = useState(false);


  const handleClick = () =>{
    inputRef.current.focus();
  }

  useEffect(()=>{
    setTimeout(() =>{
      console.log('passou aqui');
      count.current = 300;
      setValue(true);
    },3000)
  })


  return (
    <>
    <h1>Valor do count: {count.current}</h1>
      <br/>
        Foco: <input ref={inputRef}/>
        <button onClick={handleClick} >Focar</button>
    </>
  );
}


export default App;