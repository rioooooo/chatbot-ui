import React from 'react';

class Details extends React.Component {
  render() {
    return (
      <div>
        <pre>{this.props.details.details}</pre>
      </div>
    );
  }
}

export default Details;
