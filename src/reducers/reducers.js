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

    default:
      return state;
  }
}
