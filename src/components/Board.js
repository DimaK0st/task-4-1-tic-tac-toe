import React, {Component} from 'react';
import Square from "./Square";

class Board extends Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        const status = 'Next player: X';
        let result = [], temp = [], index = 0

        for (let i = 0; i < 3; i++) {
            temp = []
            for (let j = 0; j < 3; j++) {
                temp.push(this.renderSquare(index))
                index++
            }
            result[i] = temp
        }

        return (
            <div>
                <div className="status">{status}</div>

                {result.map(item=>(
                    <div className="board-row">
                        {item}
                    </div>
                ))}

            </div>
        );
    }
}

export default Board;