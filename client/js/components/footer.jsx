import $ from 'jquery';
import React from 'react';

class Footer extends React.Component {
  // componentWillMount() {
  //   this.setState({ text: '' });
  // }
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _dispatchSunny(text) {
    const sunnyText = { sender: 'sunny', text };
    this.props.receiveSunny(sunnyText);
    const objDiv = document.getElementById('main-body');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  update(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  endSession(e) {
    e.preventDefault();
    $.ajax({
      url: '/getInitSessionId',
      method: 'GET',
      success: this._dispatchSunny.bind(this, { response: 'Ok, new session' }),
    });
  }

  handleSubmit(e) {
    const that = this;
    e.preventDefault();
    const userText = { sender: 'user', text: this.state.text };
    this.props.receiveUser(userText);
    this.setState({ text: '' });
    // const prefix = '&cid=';
    // const shopCode = localStorage.getItem('shopCode');
    // const suffix = localStorage.getItem('cChannel') === 'true' ? prefix + shopCode : '';
    // console.log('suffix');
    // console.log(suffix);
    $.ajax({
      url: '/callUsApi',
      method: 'GET',
      data: {
        q: that.state.text,
        newURL: this.props.newURL,
      },
      dataType: 'json',
      success: (data, textStatus, jqXHR) => {
        this._dispatchSunny(data);
      },
    });
  }

  render() {
    const { receiveSunny, receiveUser } = this.props;
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input id="btn-input" type="text" className="form-control input-sm" value={this.state.text} onChange={this.update.bind(this)} />
          <br />
          <span className="pull-right text-muted">
            <button className="pull-right btn btn-primary btn-sm" id="btn-chat">
                  Send
            </button>
              &nbsp;&nbsp;
            <button className="pull-left btn btn-warning btn-sm" id="btn-session" onClick={this.endSession.bind(this)}>
                  End Session
            </button>
          </span>
        </form>
      </div>
    );
  }
}

export default Footer;
