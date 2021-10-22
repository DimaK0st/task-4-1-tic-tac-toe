import React, {Component, useState} from 'react';
import Square from "./Square";

class Board extends Component {


    renderSquare(i) {
        // alert("-----------------------------------------"+this.props.squares[i])
        return <Square value={this.props.squares[i]}
                       onClick={() => this.props.onClick(i)}/>;
    }

    render() {

        let count = 0
        let countArr = Array(3).fill(null)

        return (


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
        );
    }
}

export default Board;
