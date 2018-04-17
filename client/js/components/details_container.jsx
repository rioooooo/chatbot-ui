import { connect } from 'react-redux';
import Details from './details';

const mapStateToProps = state => ({
  details: state.details,
});

export default connect(mapStateToProps)(Details);
