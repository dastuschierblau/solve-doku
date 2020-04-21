import React, { Fragment } from 'react';
import Grid from './Grid';
import { boards, fixCase } from './utils/boards';

function Nav({ options, setDifficulty }) {
  return (
    <nav>
      <ul className='btn-list'>
        {options.map((item) => {
          return (
            <li key={item}>
              <button className='small-btn' onClick={() => setDifficulty(item)}>
                {fixCase(item)}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: '',
    };

    this.setDifficulty = this.setDifficulty.bind(this);
  }

  setDifficulty(value) {
    this.setState({
      difficulty: value,
    });
  }

  render() {
    const { difficulty } = this.state;
    const options = Object.keys(boards);

    if (!difficulty) {
      return (
        <Fragment>
          <h3>Choose a difficulty:</h3>
          <Nav options={options} setDifficulty={this.setDifficulty} />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Nav options={options} setDifficulty={this.setDifficulty} />
        <Grid difficulty={difficulty} />
      </Fragment>
    );
  }
}

export default Game;
