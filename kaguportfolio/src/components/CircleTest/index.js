import "./index.css"
import {useReducer, useEffect} from "react";


function reducer(state, action){
    switch(action.type){
        case "increment" :
            return {counter : state.counter + 1}
        case "decrement" :
            if(state.counter > 0){
        return {counter : state.counter - 1}
            }else{
                return {counter : state.counter = 0}
            }
        case "reset" :
        return {counter : state.counter = 0}
        case "increment 5" :
            return {counter : state.counter + 5}
        default :
        return state;

    }
}

function CircleTest(){

    const [state, dispatch] = useReducer(reducer, {counter : 0});

    function increment(){
      dispatch({type: "increment"});
    }

    function decrement(){
        dispatch({type : "decrement"})
    }

    function reset(){
        dispatch({type : "reset"})
    }
    let secretMessage;

    useEffect(()=>{
        displaySecretMessage();
    }, [state])

    function displaySecretMessage(){
        if(state.counter < 0) {
            console.log("sddssdsdsd")
            return secretMessage = <h1>sdsd</h1>
        }else{
            return secretMessage = "";
        }
    }

    function incrementMore(){
        dispatch({type : "increment 5"})
    }

    function ultraClick(){
        if(state.counter === 7){
        dispatch({type : "ultra"})
    }
}

    return (
        <div className="container">
        <div className="circle" id="red" onClick={increment}>+1</div>
        <div className="circle" id="red" onClick={incrementMore}>+5^</div>
        <div className="circle"  id="blue" onClick={decrement}>-1</div>
        <div className="circle" id="red" onClick={increment}>+1</div>
        <div className="circle"  id="yellow" onClick={reset}>Reset</div>
        <h1>Your count: {state.counter}</h1>
        {secretMessage}
        </div>
        )
}

export default CircleTest;