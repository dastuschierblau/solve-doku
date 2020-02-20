import React from 'react';
import Hover from './Hover';



function GridItem({ num }) {
  return (
    <Hover>
      { (hovering) => {
        return (
          <div className={ hovering === true ? 'bg-dark' : null }>
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
    };

    this.updateNum = this.updateNum.bind(this);
  }

  updateNum(ind, innerInd) {
    // Utilizing only for primitive testing purposes. To be refactored.
    const selection = prompt('Which number?');
    console.log(selection, ind, innerInd);

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
    }), () => console.log(this.state));
  }

  render() {
    return (
        <ul className='grid'>
          { this.state.matrix.map((item, index) => {
            return (
              <li key={ index } >
                <ul className='grid-row'>
                { this.state.matrix[index].map((innerItem, innerIndex) => {
                  const num = this.state.matrix[ index ][ innerIndex ];

                  return (
                   <li key={ `${index}-${innerIndex}` } className='grid-item flex-center' onClick={ () => this.updateNum( index, innerIndex ) }>
                      <GridItem num={ num }  />
                    </li>
                  );
                }) }
              </ul>
              </li>
            );
          }) }
        </ul>
    );
  }
}