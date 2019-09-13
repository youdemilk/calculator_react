import CreateBtn from './create-btn'
import { connect } from "react-redux";
import actions from "../../../actions";

const mapDispatchToProps = dispatch => ({
  addCustomButton: (name) => dispatch(actions.addCustomButton(name)),
  editCustomButton: (prevName, buttonName) => dispatch(actions.editCustomButton(prevName, buttonName)),
  setUsers: (users) => dispatch(actions.setUsers(users)),
});

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  currentUser: state.usersReducer.currentUser,
  currentButton: state.usersReducer.currentButton
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBtn);