import Types from "./types";

const INTIAL_STATE = {
    population: null
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case Types.FETCH_POPULATION:
            return { ...state, population: action.payload };
        default:
            return state;
    }
};