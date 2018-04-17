import { connect } from 'react-redux';
import { receiveURL, receiveCID } from '../actions/actions';
import Header from './header';

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
  receiveURL: newURL => dispatch(receiveURL(newURL)),
  receiveCID: newCID => dispatch(receiveCID(newCID)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
