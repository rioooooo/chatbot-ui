import { connect } from 'react-redux';
import RightLi from './right-li';
import { changeDetails } from '../../actions/actions';


const mapDispatchToProps = dispatch => ({
  changeDetails: details => dispatch(changeDetails(details)),
});

export default connect(
  null,
  mapDispatchToProps,
)(RightLi);
