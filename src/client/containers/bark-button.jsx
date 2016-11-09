import {connect} from 'react-redux';

import Button from '../components/button';

import {makeBark} from '../actions/dog-actions';

const mapStateToProps = state=>state;

const mapDispatchToProps = (dispatch, ownProps)=>({
  action: ()=> {
    dispatch(makeBark(!ownProps.isBark));
  },
  actionLabel: 'Bark'
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);