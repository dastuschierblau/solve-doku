import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import Grid from './components/Grid';

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='container'>
          <header className='header flex-center'>
            <h1>Solve Doku</h1>
          </header>

          <Game />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
