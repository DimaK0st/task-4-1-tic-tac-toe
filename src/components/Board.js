import React, {Component} from 'react';
import Square from "./Square";

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

    resetUseState(){
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
            step: 0
        });
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                this.resetUseState()
                return squares[a];
            }
        }
        if (this.state.step === 9) {
            this.resetUseState()
            return false
        }
        return null;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
            step: this.state.step + 1
        });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}/>;
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);

        if (winner) {
            this.setState({
                window: false,
                windowText: 'Выиграл: ' + winner,
                windowTextButton: "Начать снова"
            });
        } else if (winner === false) {
            this.setState({
                window: false,
                windowText: 'Ничья ¯\\_(ツ)_/¯',
                windowTextButton: "Начать снова"
            });
        }

        let status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');


        let count = 0
        let countArr = Array(3).fill(null)

        let listSquares = countArr.map(() =>
            <div key={count} className='board-row'>
                {countArr.map(() =>
                    <div key={count}>
                        {this.renderSquare(count++)}
                    </div>
                )}
            </div>
        );

        return (

            <div>
                <div className="div-window" style={{display: this.state.window ? 'none' : 'block'}}>
                    <div className="div-window-info">
                        <span>{this.state.windowText }</span>
                        <br/>
                        <button onClick={() => (this.setState({window: !this.state.window}))}>{this.state.windowTextButton}</button>
                    </div>
                </div>
                <div className="status">{status}</div>
                <div className="board">
                    {listSquares}
                </div>
            </div>
        );
    }
}

export default Board;
