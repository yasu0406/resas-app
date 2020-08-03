import React, {useState} from 'react';
import axios from 'axios';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
export const PrefCard = ({prefName, prefCode, pref}) => {
    const [dense, setDense] = useState(false);
    const onChange = (event) => {
      setDense(event.target.checked);
      pref(event.target.value);
    }
    return(
        <div>
        <FormControlLabel
          control={
            <Checkbox checked={dense} onChange={(event) => onChange(event)} value={prefCode} />
          }
          label={prefName}
        />
        </div>
    )
};