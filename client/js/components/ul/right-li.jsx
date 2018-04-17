import React from 'react';
import TimeAgo from 'react-timeago';


class RightLi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li className="right clearfix">
        <span className="chat-img pull-right">
          <img src="https://ussuning.files.wordpress.com/2015/08/q-03.png?w=270" width="53" height="50" alt="User" className="img-circle" />
        </span>
        <div className="chat-body clearfix">
          <div className="header">
            <strong className="pull-right primary-font">User</strong>
            <small>
              <span className="glyphicon glyphicon-time" /><TimeAgo date={Date.now()} minPeriod={5} />
            </small>
          </div>
          <p className="pull-right text-muted">{this.props.text}</p>
        </div>
      </li>
    );
  }
}

export default RightLi;
