import { combineReducers } from 'redux';
// This function helps you organize your reducers to manage their own slices of state,
import posts from './posts';

export const reducers = combineReducers({ posts });
