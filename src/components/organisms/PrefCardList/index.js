import React, { useState } from 'react';
import { PrefCard } from '../../molecules';
import CreateChart from '../CreateChart';
import FormGroup from '@material-ui/core/FormGroup';

export const PrefCardList = ({prefectures, population}) => {
    const [pref, setPref] = useState();
    if(!prefectures) return <p>Loading</p>
    return(
        <>
            <h1>都道府県</h1>
            <FormGroup row>
                {
                    prefectures.map(prefecture => {
                        return <PrefCard key={prefecture.prefName} prefName={prefecture.prefName} prefCode={prefecture.prefCode} pref={setPref} />
                    })
                }
            </FormGroup>
            <CreateChart population={population} pref={pref} />
        </>
    )
};