import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    UserActionTypes,
  } from '../actions/userActions';
  import { User } from '../api';
  
  interface UserState {
    loading: boolean;
    users: User[];
    error: string;
  }
  
  const initialState: UserState = {
    loading: false,
    users: [],
    error: '',
  };
  
  const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: '',
        };
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload ,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;