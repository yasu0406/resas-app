import { combineReducers } from 'redux';
import prefectureReducer from './prefectures/reducer';
import populationReducer from './population/reducer';

const rootReducer = combineReducers({
    prefectures: prefectureReducer,
    population: populationReducer
});

export default rootReducer;