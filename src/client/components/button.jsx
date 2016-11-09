import React, {PropTypes} from 'react';

const Button = (props)=> {
  const {action, actionLabel} = props;
  return (<button onClick={action} >{actionLabel}</button>)
};

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
};

export default Button;