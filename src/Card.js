import React,{useContext} from 'react';
import {ThemeContext} from './Themes';
import Form from './Form';


function Card(){
    const themes = useContext(ThemeContext);
    console.log('Theme Values: ',themes);

    return (
        <div style={{padding: '50px'}}>
            <Form/>
           <button style={{background: themes.background, color: themes.color}}>Card Button</button>
        </div>
    );
}

export default Card;