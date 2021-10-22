import {DECREMENT, INCREMENT, NEXT_STEP, RESET, STANDOFF, SWITCH_WINDOW, WINNER} from "./types";


const defaultState = {

    squares: Array(9).fill(null),
    xIsNext: true,
    step: 0,
    window: false,
    windowText: 'Начать новую игру: ',
    windowTextButton: 'Старт',

}


export default function rootReducer(state = defaultState, action) {

    switch (action.type) {

        case RESET:
            console.log("RESET")
            return {
                ...state,
                squares: Array(9).fill(null),
                xIsNext: true,
                step: 0
            }

        case NEXT_STEP:
            return {
                ...state,
                squares: action.payload.squares,
                xIsNext: !state.xIsNext,
                step: state.step + 1
            }


        case WINNER:
            return {
                ...state,
                window: false,
                windowText: 'Выиграл: ' + action.payload.winner,
                windowTextButton: "Начать снова"
            }

        case STANDOFF:
            return {
                ...state,
                window: false,
                windowText: 'Ничья ¯\\_(ツ)_/¯',
                windowTextButton: "Начать снова"
            }


        case SWITCH_WINDOW:
            return {
                ...state,
                window: !state.window
            }


        default:
            return state


    }
}


