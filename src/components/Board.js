import React, {Component} from 'react';
import Square from "./Square";
import calculateWinner from "../functions/calculateWinner";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            step: 0,
            window: false,
            windowText: 'Начать новую игру: ',
            windowTextButton: 'Старт',
        };
    }

    resetUseState() {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
            step: 0
        });
    }


    handleClick(i) {
        console.log(this.state.squares)
        const squares = this.state.squares.slice();
        let winner = calculateWinner(this.state.squares, this.state.step);
        if (winner || squares[i]) {
            console.log(squares[i])
            return;
        }



        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
            step: this.state.step + 1
        });


        winner = calculateWinner(squares, this.state.step);
        console.log(winner)
        if (winner) {
            this.resetUseState()
            this.setState({
                window: false,
                windowText: 'Выиграл: ' + winner,
                windowTextButton: "Начать снова"
            });
        } else if (winner === false) {
            this.resetUseState()
            this.setState({
                window: false,
                windowText: 'Ничья ¯\\_(ツ)_/¯',
                windowTextButton: "Начать снова"
            });
        }

    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}/>;
    }

    render() {

        let status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
        let count = 0
        let countArr = Array(3).fill(null)

        return (

            <div>
                <div className="div-window" style={{display: this.state.window ? 'none' : 'block'}}>
                    <div className="div-window-info">
                        <span>{this.state.windowText}</span>
                        <br/>
                        <button
                            onClick={() => (this.setState({window: !this.state.window}))}>{this.state.windowTextButton}</button>
                    </div>
                </div>
                <div className="status">{status}</div>
                <div className="board">
                    {
                        countArr.map(() =>
                            <div key={count} className='board-row'>
                                {countArr.map(() =>
                                    <div key={count}>
                                        {this.renderSquare(count++)}
                                    </div>
                                )}
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Board;
