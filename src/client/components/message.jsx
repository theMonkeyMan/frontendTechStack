import React, {PropTypes} from 'react';

const Message = ({message}) =>(<div>{message}</div>);

Message.propsTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;