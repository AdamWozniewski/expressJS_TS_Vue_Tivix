import ACTIONS from './../../static/ACTIONS';
import { userState } from '../defaultState';

const userReducer = (state = userState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.AUTH_SUCCESS: {
      return {
        ...state,
        userID: payload.data,
      };
    }
    default: return state;
  }
};

export default userReducer;