import BtnEdit from './btn-edit'
import { connect } from "react-redux";
import actions from "../../../actions";

const mapDispatchToProps = dispatch => ({
    setCustomButtons: (buttons) => dispatch(actions.setCustomButtons(buttons)),
    deleteCustomButton: (button) => dispatch(actions.deleteCustomButton(button)),
    setUsers: (users) => dispatch(actions.setUsers(users)),    
    setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
});

const mapStateToProps = state => ({
    buttons: state.usersReducer.currentUser.buttons || [],
    currentUser: state.usersReducer.currentUser,
    users: state.usersReducer.users
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BtnEdit);
