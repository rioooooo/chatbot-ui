import React from 'react';
import LeftLiContainer from './left_li_container';
import RightLiContainer from './right_li_container';

class Ul extends React.Component {
  render() {
    const { texts } = this.props;
    const textLis = texts.map((text, idx) => {
      if (text.sender === 'sunny') {
        return <LeftLiContainer text={text.text} key={idx} />;
      } else if (text.sender === 'user') {
        return <RightLiContainer text={text.text} key={idx} />;
      }
    });
    return (

      <ul className="chat">
        { textLis }
      </ul>
    );
  }
}

export default Ul;
