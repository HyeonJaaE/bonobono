import { AuthTypes, SET_USER } from "../actions/authAction";

type AuthState = {
    isAuthenticated: boolean;
    user: object;
};

const initialState: AuthState = {
    isAuthenticated: false,
    user: {},
};

export default (state = initialState, action: AuthTypes) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        default:
            return state;
    }
};
