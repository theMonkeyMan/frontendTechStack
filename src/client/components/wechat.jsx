import React, { Component, PropTypes } from 'react';


const onHandler = (event) => {
  if (event.keyCode === 13) {
    socket.emit('toServerNews', event.currentTarget.value);
    event.currentTarget.value="";
  }
}

const Wechat = React.createClass({
  componentWillMount: () => {
  },

  render: () => {
    return (<textarea rows="" cols="" onKeyUp={onHandler} />)
  }
});

export default Wechat;
