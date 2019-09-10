export const addUser = user => {  
  return {
    type: "ADD_USER",
    payload: user
  };
};

export const setUsers = (users) => ({
  type: "SET_USERS",
  payload: users,
})

export const deleteUser = (user) => ({
  type: "DELETE_USER",
  payload: user.id
})
    
export const add_btn = user => {
  return {
    type: "ADD_BTN",
    payload: user
  };
};

export const delete_btn = user => {
  return {
    type: "DELETE_BTN",
    payload: user
  };
};


