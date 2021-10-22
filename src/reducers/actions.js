import {DECREMENT, INCREMENT, NEXT_STEP, RESET, STANDOFF, SWITCH_WINDOW, WINNER} from "./types";

export  function increment(){
    return{
        type:INCREMENT
    }
}

export  function decrement(){
    return{
        type:DECREMENT
    }
}


export  function reset(){
    return{
        type:RESET
    }
}


export  function nextStep(squares){
    return{
        type:NEXT_STEP,
        payload: {
            squares: squares
        }
    }
}

export  function winnerAction(winner){
    return{
        type:WINNER,
        payload: {
            winner: winner
        }
    }
}


export  function standoffAction(){
    return{
        type:STANDOFF
    }
}

export  function switchAction(){
    return{
        type:SWITCH_WINDOW
    }
}

