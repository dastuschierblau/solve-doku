function isValidInt( num ) {
  let nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  if ( !nums.includes(num) ) {
    return false;
  }

  return true;
}

function isNotInRow( num, row, col, matrix ) {
  for( let j = 0; j < 9; j++ ) {
    if ( matrix[row][j] === num && col !== j ) {
      return false;
    }
  }

  return true;
}

function isNotInColumn( num, row, col, matrix ) {
  for( let i = 0; i < 9; i++ ) {
    if( matrix[i][col] == num && row !== i ) {
      return false;
    }

    return true;
  }
}

function isNotInZone( num, row, col, matrix ) {
  // Provide zone coordinates
  const offsetX = Math.floor( row / 3 ),
    offsetY = Math.floor( col / 3 );

  for( let i = 0; i < 3; i++ ) {
    for ( let j = 0; j < 3; j++ ) {
      let x = offsetX * 3,
        y = offsetY * 3;

      if ( matrix[ x + i ][ y + j ] === num && ( (x + i) !== row ) && ( (y + j) !== col ) ) {
        return false;
      }
    }
  }

  return true;
}

export default function solve( matrix ) {
  for( let i = 0; i < 9; i++ ) {
    for( let j = 0; j < 9; j++ ) {
      const num = matrix[i][j];
      console.log(isValidInt(num), isNotInRow(num, i, j, matrix), isNotInColumn(num, i, j, matrix), isNotInZone(num, i, j, matrix));
      if ( !isValidInt( num ) || !isNotInRow( num, i, j, matrix ) || !isNotInColumn( num, i, j, matrix ) || !isNotInZone( num, i, j, matrix ) ) {
        return false;
      }
    }
  }

  return true;
}

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

*/