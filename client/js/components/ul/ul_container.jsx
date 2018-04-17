import { connect } from 'react-redux';
import Ul from './ul';

const mapStateToProps = state => ({
  texts: state.chats,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ul);
