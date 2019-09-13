import {
  ADD_USER,
  SET_USERS,
  DELETE_USER,
  EDIT_USER,
  SET_CURRENT_USER,
  ADD_CUSTOM_BUTTON,
  EDIT_CUSTOM_BUTTON,
  DELETE_CUSTOM_BUTTON,
  SET_CUSTOM_BUTTONS,
  ADD_TO_HISTORY,
  CLEAR_HISTORY,
  SET_CURRENT_CUSTOM_BUTTON
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

export const addCustomButton = name => ({
  type: ADD_CUSTOM_BUTTON,
  payload: name
});

export const setCurrentCustomButton = button => ({
  type: SET_CURRENT_CUSTOM_BUTTON,
  payload: button
});

export const setCustomButtons = buttons => ({
  type: SET_CUSTOM_BUTTONS,
  payload: buttons
});

export const deleteCustomButton = button => ({
  type: DELETE_CUSTOM_BUTTON,
  payload: button
});

export const editCustomButton = buttonName => ({
  type: EDIT_CUSTOM_BUTTON,
  payload: buttonName
});

export const addToHistory = value => ({
  type: ADD_TO_HISTORY,
  payload: value
});

export const clearHistory = () => ({
  type: CLEAR_HISTORY
});
