import React from 'react';

export default class Hover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    };

    this.mouseIn = this.mouseIn.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseIn() {
    this.setState({ hovering: true });
  }

  mouseOut() {
    this.setState({ hovering: false });
  }

  render() {
    return (
      <div onMouseOver={ this.mouseIn } onMouseOut={ this.mouseOut }>
        { this.props.children(this.state.hovering) }
      </div>
    );
  }
}