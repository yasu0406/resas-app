import prefecture from '../../api/prefecture';

import Types from './types';

export const fetchPopulation = (prefCode) => async dispatch => {
    if(prefCode) {
        try{
            const res = await prefecture.get(`/population/composition/perYear?prefCode=${prefCode}`);
            dispatch({ type: Types.FETCH_POPULATION, payload: res.data.result.data[0] });
        }catch(err) {
            console.log(err);
        }
    }
};