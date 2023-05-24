import React from 'react';

const Button = (props)=>{
    return(
        <>
        <button onClick={props.clicMe} className={props.bby}>{props.show}</button>
        </>
    )
}

export default Button;