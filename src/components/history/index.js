import History from './history';
import { connect } from "react-redux";
import actions from "../../actions";

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(actions.setUsers(users)),
  setCurrentUser: user => dispatch(actions.setCurrentUser(user))
});

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  history: state.usersReducer.currentUser.history
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
