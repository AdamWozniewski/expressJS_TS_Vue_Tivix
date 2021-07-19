import ACTIONS from '../../static/ACTIONS';

const { AUTH_SUCCESS, AUTH_ERR } = ACTIONS;

export const authSuccess = (payload: object) => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authErr = (payload: object) => ({
  type: AUTH_ERR,
  payload,
});
