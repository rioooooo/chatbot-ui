import React from 'react';
import TimeAgo from 'react-timeago';
import Linkify from 'react-linkify';


class LeftLi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    /* e.preventDefault();  allows links to be clickable */
    const obj = this.props.text;
    const s = JSON.stringify(obj, null, 4);
    this.props.changeDetails(s);
  }

  render() {
    let statement = this.props.text.response;
    if (this.props.text.hasOwnProperty('answer')) {
      if (this.props.text.answer.url.length !== 0) {
        for (let i = 0; i < this.props.text.answer.url.length; i += 1) {
          statement += `\n\n${this.props.text.answer.url[i].text} `;
          statement += this.props.text.answer.url[i].url;
        }
      }
      if (this.props.text.answer.list.length !== 0) {
        const listStr = `${this.props.text.answer.list}`;
        const arrayList = listStr.split(',');
        for (let j = 1; j < (arrayList.length + 1); j += 1) {
          statement += `\n\n${j}) ${arrayList[j - 1]}`;
        }
        /* var statement = statement.split(',').join(',\n\n'); */
      }
    }

    return (
      <li className="left clearfix" Link to="route" target="_blank" onClick={this.handleClick.bind(this)}>
        <span className="chat-img pull-left">
          <img src="https://pbs.twimg.com/profile_images/636311572944580608/A6bTm66m_400x400.png" width="50" height="50" alt="Sunny" className="img-circle" />
        </span>
        <div className="chat-body clearfix">
          <div className="header">
            <strong className="primary-font">Sunny</strong>
            <small className="pull-right text-muted">
              <span className="glyphicon glyphicon-time" /><TimeAgo date={Date.now()} minPeriod={5} />
            </small>
          </div>

          {statement.split('\n').map(item => (
            <span>
              <Linkify properties={{ target: '_blank' }}>{item}</Linkify>
              <br />
            </span>
              ))
          }

        </div>
      </li>
    );
  }
}

export default LeftLi;
