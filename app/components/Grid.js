import React from 'react';
import Hover from './Hover';
import checkEntry from './utils/solver';
import { boards } from './utils/boards';

function GridItem({ num }) {
  return (
    <Hover>
      {(hovering) => {
        return (
          <div
            className={
              hovering === true
                ? 'bg-light grid-number flex-center'
                : 'grid-number flex-center'
            }
          >
            {num === 0 ? null : num}
          </div>
        );
      }}
    </Hover>
  );
}

function Numpad({ selectNum }) {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ul className='numpad'>
      {nums.map((item) => {
        return (
          <li
            key={item}
            className='numpad-item flex-center'
            onClick={() => selectNum(item)}
          >
            {item}
          </li>
        );
      })}
      <li
        className='numpad-item flex-center center-text'
        onClick={() => selectNum(0)}
      >
        Clear Cell
      </li>
    </ul>
  );
}

export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matrix: [],
      selectedNum: [-1, -1],
      difficulty: props.difficulty,
    };

    this.updateNum = this.updateNum.bind(this);
    this.selectCell = this.selectCell.bind(this);
    this.clearPuzzle = this.clearPuzzle.bind(this);
  }

  componentDidMount() {
    this.setState({
      matrix: boards[this.props.difficulty],
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      matrix: boards[nextProps.difficulty],
    });
  }

  selectCell(ind, innerInd) {
    this.setState({
      selectedNum: [ind, innerInd],
    });
  }

  updateNum(num) {
    const [ind, innerInd] = this.state.selectedNum;

    let isOk = checkEntry(num, ind, innerInd, this.state.matrix);

    if (isOk || num === 0) {
      this.setState((prevState) => ({
        matrix: prevState.matrix.map((item, index) => {
          return index === ind
            ? item.map((item2, index2) => {
                return index2 === innerInd ? num : item2;
              })
            : item;
        }),
      }));
    } else {
      alert('Invalid entry');
    }
  }

  clearPuzzle() {
    this.setState({
      matrix: boards[this.state.difficulty],
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='grid-container'>
          <table className='grid'>
            <tbody>
              {this.state.matrix.map((item, index) => {
                return (
                  <tr key={index} className='grid-row'>
                    {this.state.matrix[index].map((innerItem, innerIndex) => {
                      const num = this.state.matrix[index][innerIndex];

                      return (
                        <td
                          key={`${index}-${innerIndex}`}
                          className={
                            index === this.state.selectedNum[0] &&
                            innerIndex === this.state.selectedNum[1]
                              ? 'grid-item flex-center bg-light'
                              : 'grid-item flex-center'
                          }
                          onClick={() => this.selectCell(index, innerIndex)}
                        >
                          <GridItem num={num} />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Numpad selectNum={this.updateNum} />

          <div className='flex-center btn-col'>
            <button className='btn' onClick={this.clearPuzzle}>
              Clear Puzzle
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//<button className='btn' onClick={ this.solvePuzzle }>Solve Puzzle</button>
