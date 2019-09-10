import { setItemToLocalStorage } from "../helpers"

const initialState = {
  users: [],
  currentUser: {}
};

export function usersReducer(state = initialState, action) {

  switch (action.type) {
    case "SET_USERS": {
      return {
        ...state,
        users: [...state.users, ...action.payload]
      }
    }
    case "ADD_USER": {
      const users = [...state.users, action.payload];
      return { ...state, users };
    }
   
    case "DELETE_USER": {
      const users = state.users.filter(item => item.id !== action.payload);
      return { 
        ...state, 
        users 
      };
    }
 
    case "ADD_BTN": {
      const users = [...state.users, action.payload];
      return { ...state, users };
    }

    case "DELETE_BTN": {
      const users = [...state.users, action.payload];
      return { ...state, users };
    }

    default:
      return state;
  }
}