import {
  ADD_USER,
  SET_USERS,
  DELETE_USER,
  EDIT_USER,
  SET_CURRENT_USER
} from "../constants/constants";

export const addUser = user => ({
  type: ADD_USER,
  payload: user
});

export const setUsers = users => ({
  type: SET_USERS,
  payload: users
});

export const deleteUser = user => ({
  type: DELETE_USER,
  payload: user.id
});

export const editUser = user => ({
  type: EDIT_USER,
  payload: user
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
