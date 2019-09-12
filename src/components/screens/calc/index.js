import Calc from "./calc";
import { connect } from "react-redux";
import actions from "../../../actions";

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(actions.setUsers(users)),
  clearHistory: () => dispatch(actions.clearHistory()),
});

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  history: state.usersReducer.currentUser.history,
  currentUser: state.usersReducer.currentUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calc);
