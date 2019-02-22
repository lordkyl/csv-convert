import React from 'react';
import TextField from '@material-ui/core/TextField';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function formatValue(input){
    return isNumeric(input) ? input : `'${input}'`;
}

function formatValues(data){
    return Object.keys(data).map(key => formatValue(data[key]));
}

export default function(props){

    let { parsed } = props;

    if (!parsed || !parsed.data) return ( <div></div> );

    let cols = parsed.meta.fields.join(',');

    let result = parsed.data
        .map(d => `insert into (${cols}) values (${formatValues(d)});`)
        .join('\n');

    return (

        <TextField 
            id="sqlresult" 
            type="text" 
            label="SQL Statements"
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