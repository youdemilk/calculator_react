const initialState = {
  users: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      const users = [...state.users, action.payload];
      return { ...state, users };

    default:
      return state;
  }
}
