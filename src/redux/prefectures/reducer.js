import Types from "./types";

const INTIAL_STATE = {
    prefectures: null
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case Types.FETCH_PREFECTURES:
            return { ...state, prefectures: action.payload };
        default:
            return state;
    }
};