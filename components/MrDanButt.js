import React, {useState} from 'react';
import  Button  from './Button';

const MrDanButt = ()=>{

    const [num, setdigit] = useState(1)
    const [users, setUsers] = useState(["Man", "Woam", "Alien", "Vampire"]);

    const decrease = ()=>{
        if (num == 0) {
            return
        }
        setdigit(num-1);
    }

    const increase = ()=>{
        setdigit(num+1)
    }
    return(
        <>
        <p>Daniel</p>
        <ul>
            {users == "" ? "No users available" :
              users.map((el, index)=>(
                <div key={index}>
                <li>{el}</li>
                </div>
              ))
            }
        </ul>
       <Button bby="btn btn-success"  clicMe={increase} show="increase" />
      <h1>{num}</h1>
       <Button bby="btn btn-info" clicMe={decrease} show="decrease" />
        </>
    )
}

export default MrDanButt;