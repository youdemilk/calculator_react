import HomePage from "./home-page";
import { connect } from "react-redux";
import actions from "../../../actions";

const mapDispatchToProps = dispatch => ({
    setUsers: (users) => dispatch(actions.setUsers(users)),
    deleteUser: (user) => dispatch(actions.deleteUser(user)),
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
});

const mapStateToProps = state => ({
    users: state.usersReducer.users,
    currentUser: state.usersReducer.currentUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
