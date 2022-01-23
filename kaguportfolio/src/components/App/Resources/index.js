import {useReducer} from "react";
import "./index.css"

function reducer(state, action){
switch(action.type){
    case "woodClick" :
        return {wood : state.wood + 1, rock : state.rock, food : state.food}
        case "rockClick" :
        return {wood : state.wood, rock : state.rock + 1, food : state.food}
        case "foodClick" :
        return {wood : state.wood, rock : state.rock, food : state.food + 1}
        default :
    return state;
}
}

const initialState = {
wood : 0,
rock : 0,
food : 0
}

function Resources(){



    const [state, dispatch] = useReducer(reducer, initialState)

    function handleWoodClick(){
        dispatch({type : "woodClick"});
        console.log(state)
    }
    function handleRockClick(){
        dispatch({type : "rockClick"});
    }
    function handleFoodClick(){
        dispatch({type : "foodClick"});
    }

    function woodAnimation(){

    }

    return (
        <div>
        <div className="container_2">
            <h1>{state.wood}</h1>
            <h1>{state.rock}</h1>
            <h1>{state.food}</h1>
            </div>
        <div className="container_1">
        <h2 className="resource" id="wood" onClick={handleWoodClick}>Chop Tree
        <div className="wanim">
        </div>
        </h2>
        <h2 className="resource" id="rock"onClick={handleRockClick}>Mine Rock</h2>
        <h2 className="resource" id="food" onClick={handleFoodClick}>Gather Food</h2>
        </div>
        <div className="animationscontainer">
        <div className="animations" id="wooda"></div>
        </div>
        </div>
    )
}

export default Resources;