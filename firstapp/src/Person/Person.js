import React from 'react';
const person=(props)=>{
    return (<div ><p onClick={props.click}>I'm a {props.name} and i am {props.age}</p>
       <p>{props.children}</p></div>)

};

export default person;