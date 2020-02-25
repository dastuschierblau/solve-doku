import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './components/Grid';

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <header className='header flex-center'>
          <h1>Enter a Sudoku puzzle to solve:</h1>
        </header>
        <div className='container'>
          <Grid />
        </div>
        
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));