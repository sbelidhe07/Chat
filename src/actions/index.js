import * as types from '../constants/ActionTypes'

let nextMessageId = 0

export const addMessage = (message, author,date) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
  date
})

export const messageReceived = (message, author,date) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
  date
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})

