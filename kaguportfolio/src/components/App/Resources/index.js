import {useReducer} from "react";


function reducer(){

}

const initialState = {
wood : 0,
rock : 0,
food : 0
}

function Resources(){


    const [state, dispatch] = useReducer(reducer, initialState)



    return (
        <div>
        <h2>Chop Tree</h2>
        <h2>Mine Rock</h2>
        <h2>Gather Food</h2>
        </div>
    )
}

export default Resources;