import CreateUser from './create-user'
import { connect } from "react-redux";
import actions from "../../../actions";

const mapDispatchToProps = dispatch => ({
  addUser: (name) => dispatch(actions.addUser(name)),
  editUser: (user) => dispatch(actions.editUser(user)),
});

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  currentUser: state.usersReducer.currentUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);