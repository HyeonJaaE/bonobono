// set logged in user
export const setCurrentUser = (user:any) => {
    return {
        type: "SET_CURRENT_USER",
        payload: user,
    };
};

export const githubData = (data:any) => (dispatch:any) => {
    console.log(data);
    dispatch({type: "SET_CURRENT_USER", payload: data});
}

/*
//login
export const loginUser = (userData) => (dispatch) => {
    console.log("loginUser 함수 호출" + userData);
    dispatch(setCurrentUser(userData));
};
// Log user out
export const logoutUser = () => (dispatch) => {
    dispatch(setCurrentUser({}));
};
*/