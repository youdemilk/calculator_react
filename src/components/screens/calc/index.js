import Calc from './calc'
import { connect } from "react-redux";
import actions from "../../../actions";

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
});

const mapStateToProps = state => ({
    users: state.usersReducer.users,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calc);
