import React from 'react';
import Hover from './Hover';
import solve from './utils/solver';


function GridItem({ num }) {
  return (
    <Hover>
      { (hovering) => {
        return (
          <div className={ hovering === true ? 'bg-light grid-number flex-center' : 'grid-number flex-center' }>
            { num === 0 ? null : num }
          </div>
        );
      }}
    </Hover>
  );
}

export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matrix: [
        [ 9, 4, 2, 7, 6, 1, 8, 5, 3 ],
        [ 3, 8, 7, 5, 9, 2, 6, 4, 1 ],
        [ 6, 1, 5, 8, 3, 4, 2, 9, 7 ],
        [ 2, 6, 3, 1, 4, 7, 5, 8, 9 ],
        [ 8, 7, 1, 9, 2, 5, 3, 6, 4 ],
        [ 4, 5, 9, 3, 8, 6, 1, 7, 2 ],
        [ 7, 9, 6, 2, 1, 8, 4, 3, 5 ],
        [ 5, 2, 8, 4, 7, 3, 9, 1, 6 ],
        [ 1, 3, 4, 6, 5, 9, 7, 2, 8 ]
      ],
      solved: false
      /*
      matrix: [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 4, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 2, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      ]
      */
    };

    this.updateNum = this.updateNum.bind(this);
    this.solvePuzzle = this.solvePuzzle.bind(this);
    this.clearPuzzle = this.clearPuzzle.bind(this);
  }

  updateNum(ind, innerInd) {
    // Utilizing only for primitive testing purposes. To be refactored.
    const selection = prompt('Which number?');

    this.setState((prevState) => ({
      matrix: prevState.matrix.map((item, index) => {
        return (
          index === ind ? (
            item.map((item2, index2) => {
              return (
                index2 === innerInd ? selection : item2
              );
            })
          ) : item
        );
      })
    }));
  }

  clearPuzzle() {
    this.setState({
      matrix: [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      ]
    })
  }

  solvePuzzle() {
    let solved = solve( this.state.matrix );
    this.setState({
      solved: solved
    });
  }

  render() {
    return (
      <React.Fragment>
        <table className='grid'>
          <tbody>
            { this.state.matrix.map((item, index) => {
              return (
                <tr key={ index } className='grid-row'>
                  { this.state.matrix[index].map((innerItem, innerIndex) => {
                    const num = this.state.matrix[ index ][ innerIndex ];

                    return (
                      <td key={ `${index}-${innerIndex}` } className='grid-item flex-center' onClick={ () => this.updateNum( index, innerIndex ) }>
                        <GridItem num={ num } />
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        
        <div className='flex-center btn-col'>
          <button className='btn' onClick={ this.solvePuzzle }>Solve Puzzle</button>
          <button className='btn' onClick={ this.clearPuzzle }>Clear Puzzle</button>
        </div>

        <div>{ this.state.solved === true ? <div> SOLVED </div> : null }</div>
      </React.Fragment>
    );
  }
}