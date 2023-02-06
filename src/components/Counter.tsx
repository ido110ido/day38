import { log } from "console";
import React,{useState,useEffect} from "react";

const Counter = () =>{
    const [count , setCount] = useState<number>(0)
    const [isFreez , setFreez] = useState<boolean>(false)
    let textFreez:string = 'prees to freeze'
    useEffect(() =>{
        console.log(count)
    },[count])
    return (
        <div>
        <p style={{color: isFreez? 'red' : 'green'}}>{count}</p>
        <button onClick= {()=>{
            if(!isFreez){
                setCount((num:number)=> num + 1)
            }
        } }>click me!</button>
        <button onClick= {()=>setFreez((freeze:boolean) => !freeze) }>{isFreez? textFreez = 'unfreeze' : 'prees to freeze'}</button>
        </div>
    )
}

export default Counter