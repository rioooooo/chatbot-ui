import { connect } from 'react-redux';
import { receiveSunny, receiveUser } from '../actions/actions';
import Footer from './footer';

const mapStateToProps = state => ({
  newURL: state.newURL,
});

const mapDispatchToProps = dispatch => ({
  receiveSunny: sunnyText => dispatch(receiveSunny(sunnyText)),
  receiveUser: userText => dispatch(receiveUser(userText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
