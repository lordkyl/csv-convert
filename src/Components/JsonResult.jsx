import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function(props){
    let { parsed } = props;

    if (!parsed || !parsed.data) return ( <div></div> );

    let result = JSON.stringify(parsed.data);

    return (

        <TextField 
            id="jsonresult" 
            type="text" 
            label="JSON"
            variant="outlined"
            multiline 
            rows="8"
            fullWidth
            margin="normal"
            value={result}
            readOnly
            >
        </TextField>           
    )
}