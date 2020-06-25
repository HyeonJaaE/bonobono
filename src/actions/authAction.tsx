// set logged in user
export const setCurrentUser = (user:any) => {
    return {
        type: "SET_CURRENT_USER",
        payload: user,
    };
};
