import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    let defaultClass = 'callout';

    defaultClass += this.props.done ? ' callout-success' : ' callout-info';

    return (
      <div className={defaultClass} onClick={this.props.onClickDone}>
        <i className='ficon ficon-checkmark mark-done'></i>
        <span>{this.props.value}</span>
        <i className='close' onClick={this.props.onClickClose}>&times;</i>
      </div>
    )
  }
};

export default ToDo;