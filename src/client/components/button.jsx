import React, {PropTypes} from 'react';

const Button = (props)=> {

  const {action, noAction, actionLabel} = props;
  const onHandler = ()=> {
    const {state} = props;
    if (state.dog.hasBarked) {
      noAction();
    } else {
      action();
    }
  }
  return (<button onClick={onHandler}>{actionLabel}</button>)
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
};

export default Button;