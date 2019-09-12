const initialState = {
  users: [],
  currentUser: {},
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERS": {
      return {
        ...state,
        users: action.payload
      };
    }

    case "ADD_USER": {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }

    case "DELETE_USER": {
      const users = state.users.filter(item => item.id !== action.payload);

      return {
        ...state,
        users
      };
    }

    case "EDIT_USER": {
      const users = state.users.map(item => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      });

      return {
        ...state,
        users
      };
    }

    case "SET_CURRENT_USER": {
      const currentUser = action.payload

      return {
        ...state,
        currentUser
      };
    }

    case "ADD_CUSTOM_BUTTON": {
      const currentUserButtons = state.currentUser.buttons ? state.currentUser.buttons : [];

      return {
        ...state,
        currentUser: {...state.currentUser, buttons: [...currentUserButtons, action.payload] } 
      };
    }

    case "SET_CUSTOM_BUTTONS": {
      const currentUserButtons = state.currentUser.buttons ? state.currentUser.buttons : [];
      
      return {
        ...state,
        currentUser:{...state.currentUser,  buttons: [...currentUserButtons, ...action.payload]}
      };
    }

    case "DELETE_CUSTOM_BUTTON": {
      const buttons = state.currentUser.buttons.filter(item => item !== action.payload);

      return {
        ...state,
        currentUser: { ...state.currentUser, buttons: buttons }
      };
    }

    case "EDIT_CUSTOM_BUTTON": {
      const buttons = state.currentUser.buttons.map(item => {
        if (item === action.payload.prevName) return action.payload.buttonName;
        return item;
      });

      return {
        ...state,
        currentUser: {...state.currentUser, buttons } 
      };
    }       

    case "ADD_TO_HISTORY": {
      const currentUserHistory = state.currentUser.history ? state.currentUser.history : [];

      return {
        ...state,
        currentUser: { ...state.currentUser, history: [...currentUserHistory, action.payload] }
      };
    }

    case "CLEAR_HISTORY": {
      return {
        ...state,
        currentUser: { ...state.currentUser, history: [] }
      };
    }

    default:
      return state;
  }
}
