import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line no-shadow
enum ActionType {
  SET_USERS = 'SET_USERS',
  SET_USER_POSTS = 'SET_USER_POSTS',
  SET_SELECT_USER_ID = 'SET_SELECT_USER_ID',
  SET_SORT_VALUE = 'SET_SORT_VALUE',
  SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
  SET_START = 'SET_START',
}

const initialState:State = {
  users: [],
  userPosts: [],
  selectUserID: 0,
  sortValue: 'All',
  searchValue: '',
  start: 0,
};

export const setUsers = createAction<User[]>(ActionType.SET_USERS);
export const setUserPosts = createAction<Post[]>(ActionType.SET_USER_POSTS);
export const setSelectUserID = createAction<number>(ActionType.SET_SELECT_USER_ID);
export const setSortValue = createAction<string>(ActionType.SET_SORT_VALUE);
export const setSearchValue = createAction<string>(ActionType.SET_SEARCH_VALUE);
export const setStart = createAction<number>(ActionType.SET_START);

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUsers, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.users = action.payload;
  });

  builder.addCase(setUserPosts, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.userPosts = action.payload;
  });

  builder.addCase(setSelectUserID, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.selectUserID = action.payload;
  });

  builder.addCase(setSortValue, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.sortValue = action.payload;
  });

  builder.addCase(setSearchValue, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.searchValue = action.payload;
  });

  builder.addCase(setStart, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.start = action.payload;
  });
});

export const store = configureStore({
  reducer,
});
