function findEmptySpace(matrix) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] === 0) {
        return {
          row: i,
          col: j,
        };
      }
    }
  }

  return false;
}

function isNotInRow(num, row, matrix) {
  for (let j = 0; j < 9; j++) {
    if (matrix[row][j] === num) {
      return false;
    }
  }

  return true;
}

function isNotInColumn(num, col, matrix) {
  for (let i = 0; i < 9; i++) {
    if (matrix[i][col] === num) {
      return false;
    }
  }

  return true;
}

function isNotInZone(num, row, col, matrix) {
  let colCorner = 0,
    rowCorner = 0,
    squareSize = 3;

  while (col >= colCorner + squareSize) {
    colCorner += squareSize;
  }

  while (row >= rowCorner + squareSize) {
    rowCorner += squareSize;
  }

  for (let i = rowCorner; i < rowCorner + squareSize; i++) {
    for (let j = colCorner; j < colCorner + squareSize; j++) {
      if (matrix[i][j] === num) {
        return false;
      }
    }
  }

  return true;
}

export default function okToPlace(num, row, col, matrix) {
  return (
    isNotInRow(num, row, matrix) &&
    isNotInColumn(num, col, matrix) &&
    isNotInZone(num, row, col, matrix)
  );
}

/*
export default function solve( matrix ) {

  let coords = findEmptySpace( matrix );
  if ( coords === false ) return matrix;
 
  // Derived from above function. Will allow checks to start with first empty space
  let { row, col } = coords;

  for( let num = 1; num < 10; num++ ) {
    if ( okToPlace( num, row, col, matrix ) ) {
      matrix[row][col] = num;

      if( solve( matrix ) ) {
        return matrix;
      }

      // If failure, reset number and try next one.
      matrix[row][col] = 0;
    }
  }

  // Triggers backtracking
  return false;
}

// In React frontend:
solvePuzzle() {
    let matrixCopy = this.state.matrix.map( item => {
      return item.map( item2 => item2 );
    });

    let solution = solve( matrixCopy );

    if ( solution ) {
      this.setState({
        matrix: solution
      });
    }
    
  }
*/

/* Test matrix that is a verified solved puzzle:
[ 9, 4, 2, 7, 6, 1, 8, 5, 3 ],
[ 3, 8, 7, 5, 9, 2, 6, 4, 1 ],
[ 6, 1, 5, 8, 3, 4, 2, 9, 7 ],
[ 2, 6, 3, 1, 4, 7, 5, 8, 9 ],
[ 8, 7, 1, 9, 2, 5, 3, 6, 4 ],
[ 4, 5, 9, 3, 8, 6, 1, 7, 2 ],
[ 7, 9, 6, 2, 1, 8, 4, 3, 5 ],
[ 5, 2, 8, 4, 7, 3, 9, 1, 6 ],
[ 1, 3, 4, 6, 5, 9, 7, 2, 8 ]

Another test puzzle:
[ 0, 0, 0, 8, 0, 1, 0, 0, 0 ]
[ 0, 0, 0, 0, 0, 0, 4, 3, 0 ]
[ 5, 0, 0, 0, 0, 0, 0, 0, 0 ]
[ 0, 0, 0, 0, 7, 0, 8, 0, 0 ]
[ 0, 0, 0, 0, 0, 0, 1, 0, 0 ]
[ 0, 2, 0, 0, 3, 0, 0, 0, 0 ]
[ 6, 0, 0, 0, 0, 0, 0, 7, 5 ]
[ 0, 0, 3, 4, 0, 0, 0, 0, 0 ]
[ 0, 0, 0, 2, 0, 0, 6, 0, 0 ]
*/
