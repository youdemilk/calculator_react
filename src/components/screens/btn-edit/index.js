import BtnEdit from './btn-edit'
import { connect } from "react-redux";
import actions from "../../../actions";

const mapDispatchToProps = dispatch => ({
    setCustomButtons: (buttons) => dispatch(actions.setCustomButtons(buttons)),
    deleteCustomButton: (button) => dispatch(actions.deleteCustomButton(button)),
    
});

const mapStateToProps = state => ({
    buttons: state.usersReducer.currentUser.buttons || [],
    currentUser: state.usersReducer.currentUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BtnEdit);
