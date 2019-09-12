import BtnBox from './btn-box' ;
import { connect } from "react-redux";
import actions from "../../actions";

const mapDispatchToProps = dispatch => ({
    setUsers: (users) => dispatch(actions.setUsers(users)),
    addToHistory: (value) => dispatch(actions.addToHistory(value)),
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
});

const mapStateToProps = state => ({
    users: state.usersReducer.users,
    currentUser: state.usersReducer.currentUser,
    history: state.usersReducer.currentUser.history,
    buttons: state.usersReducer.currentUser.buttons,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BtnBox);
