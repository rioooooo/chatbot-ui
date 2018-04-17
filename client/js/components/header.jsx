import React from 'react';
import Dropdown from 'react-dropdown';

const options = [
  { value: '54.215.232.105:8080', label: 'AWS:  54.215.232.105:8080' },
  { value: '13.56.46.252:8080', label: 'AWS2: 13.56.46.252:8080' },
  { value: 'localhost:8080', label: 'LocalHost: localhost:8080' },
  { value: '10.37.85.187:8080', label: 'HQ_SIT:  10.37.85.187:8080' },
  { value: 'succppre.cnsuing.com:8080', label: 'HQ_PRE:  succppre.cnsuing.com:8080' },
  { value: 'succp.cnsuing.com:8080', label: 'HQ_PRD:  succp.cnsuing.com:8080' },
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: { value: 'localhost:8080', label: 'LocalHost: localhost:8080' },
      cid: '',
    };
    this._onSelect = this._onSelect.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ cid: e.target.value });
    console.log('update cid:');
    console.log(this.state.cid);
  }

  _onSelect(option) {
    console.log('You selected ', option.label);
    this.setState({ selected: option });
    const newURL = this.state.selected.value;
    this.props.receiveURL(newURL);
  }

  render() {
    const defaultOption = this.state.selected;
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;
    this.props.receiveURL(this.state.selected.value);
    this.props.receiveCID(this.state.cid);
    return (
      <div className="container-fluid">

        <span className="glyphicon glyphicon-comment" />
         &nbsp;&nbsp;Chat
        {/* <input id="btn-input" type="text" className="form-control input-sm" value={this.state.text} onChange={this.update.bind(this)} /> */}
        <div>
          <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
          </div>

          <div className="result">
            You selected
            <strong> {placeHolderValue} </strong>
          </div>

        </div>
        <div className="cshopselect">
          CID: &nbsp;
          <input type="CID" style={{ color: 'black' }} className="tb1" value={this.state.cid} onChange={this.update.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Header;
