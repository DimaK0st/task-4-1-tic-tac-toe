import Board from "./Board";
import React from "react";
import '../css/board.css';
import {useDispatch, useSelector} from "react-redux";
import {nextStep, reset, standoffAction, switchAction, winnerAction} from "../reducers/actions";
import calculateWinner from "../functions/calculateWinner";

function Game() {


    const data= useSelector(state=>state)
    const dispatch = useDispatch()



    function handleClick(i) {
        const squares = data.squares.slice();
        let winner = calculateWinner(data.squares, data.step);
        if (winner || squares[i]) {
            return;
        }
        console.log(winner)
        squares[i] = data.xIsNext ? 'X' : 'O';
        dispatch(nextStep(squares));
        winner = calculateWinner(squares, data.step);

        console.log("winner")
        console.log(winner)
        console.log("if----")

        if (winner) {
            console.log('in if')
            dispatch(reset())
            dispatch(winnerAction(winner))

        } else if (winner === false) {
            dispatch(reset())
            dispatch(standoffAction())

        }

        return;
    }



    let status = 'Следующий ход: ' + (data.xIsNext ? 'X' : 'O');

    return (
        <div className="game">
            <div className="game-board">
                <div>
                    <div className="div-window" style={{display: data.window ? 'none' : 'block'}}>
                        <div className="div-window-info">
                            <span>{data.windowText}</span>
                            <br/>
                            <button
                                onClick={() => (dispatch(switchAction()))}>{data.windowTextButton}</button>
                        </div>
                    </div>
                    <div className="status">{status}</div>

                    <Board squares={data.squares} onClick={handleClick}/>
                </div>
            </div>
        </div>
    );

}

export default Game
