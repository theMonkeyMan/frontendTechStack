import {connect} from 'react-redux';

import Button from '../components/button';

import {makeBark, noBark} from '../actions/dog-actions';

const mapStateToProps = state=> ({state});

const mapDispatchToProps = (dispatch, ownProps)=>({
  action: ()=> {
    dispatch(makeBark());
  },
  noAction: ()=> {
    dispatch(noBark());
  },
  actionLabel: 'Bark'
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);