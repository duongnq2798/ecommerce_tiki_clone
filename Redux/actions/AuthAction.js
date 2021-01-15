const types = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_FINISHED: 'LOGIN_FINISHED',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT_START: 'LOGOUT_START',
  LOGOUT_FINISHED: 'LOGOUT_FINISHED',
  LOGOUT_ERROR: 'LOGOUT_ERROR',
  FETCH_POSTS_START: 'FETCH_POSTS_START',
  FETCH_POSTS_FINISHED: 'FETCH_POSTS_FINISHED',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
  ADD_POST_START: 'ADD_POST_START',
  ADD_POST_FINISHED: 'ADD_POST_FINISHED',
  ADD_POST_ERROR: 'ADD_POST_ERROR',
};

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginFinished = (user) => ({
  type: types.LOGIN_FINISHED,
  user,
});

const loginError = (error) => ({
  type: types.LOGIN_ERROR,
  error,
});

export const loginUser = async (email, pass) => (dispatch, getState) => {
  dispatch(loginStart());
  try {
    const response = {ok: true, user: 'hello'};
    if (!response.ok) {
      throw new Error(response.statusMessage);
    }
    dispatch(loginFinished(response.user));
  } catch (error) {
    dispatch(loginError(error));
  }
};

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutFinished = () => ({
  type: types.LOGOUT_FINISHED,
});

const logoutError = (error) => ({
  type: types.LOGOUT_ERROR,
  error,
});

export const logoutUser = (async) => (dispatch, getState) => {
  dispatch(logoutStart());
  try {
    const response = {ok: true};
    if (!response.ok) {
      throw new Error(response.statusMessage);
    }
    dispatch(logoutFinished());
  } catch (error) {
    dispatch(logoutError(error));
  }
};
