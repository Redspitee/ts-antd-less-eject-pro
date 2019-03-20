const LOGIN = "LOGIN";
const initState={
  username: "",
  password: ""
}
export function user(state=initState, action){
  switch(action.type){
    case LOGIN:
      return {...state,...action.payload}
    default:
      return state;
  }
}
// action creator
function loginAction (data){
  return {
    type: LOGIN,
    payload: data
  }
}
// dispatch 函数
export function login({username,password}){
  return dispatch => {
    dispatch(loginAction({username,password}))
  }
}