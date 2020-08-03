import prefecture from '../../api/prefecture';

import Types from './types';

export const fetchPrefectures = () => async dispatch => {
    try{
        const res = await prefecture.get('/prefectures');
        dispatch({ type: Types.FETCH_PREFECTURES, payload: res.data });
    }catch(err) {
        console.log(err);
    }
};