import React, {PropTypes} from 'react';

const Button = (props)=> {

  const {action, noAction, actionLabel} = props;
  const onHandler = ()=> {
    const {state} = props;
    if (state.getIn(['dog', 'hasBarked'])) {
      noAction();
    } else {
      action();
    }
  }

  return (<button onClick={onHandler}>{actionLabel}</button>)
}

Button.PropTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired
};

export default Button;
