import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
    // ゲーム状態を管理していないので不要
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: null
    //     };
    // }
    render() {
      return (
        <button
            className="square"
            // onClickもProps経由で渡してもらう
            onClick={() => this.props.onClick() } 
            //値はProps経由で渡されたvalue
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    handleClick(i) {
        // ミューテートを伴わないデータの変更
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return(
            <Square
                value={this.state.squares[i]} //Boardで管理している配列から値を渡す
                onClick={() => this.handleClick(i)} //クリックされたときこれ叩けよと言う指示
            />
        );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  