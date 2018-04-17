import { connect } from 'react-redux';
import LeftLi from './left-li';
import { changeDetails } from '../../actions/actions';


const mapDispatchToProps = dispatch => ({
  changeDetails: details => dispatch(changeDetails(details)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LeftLi);
