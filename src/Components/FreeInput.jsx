import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Papa from 'papaparse';
import SQLResult from './SQLResult';
import PreviewResult from './PreviewResult';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import JsonResult from './JsonResult';

export default function(props){

    // Declare a new state variable, which we'll call "count"
    const [tab, setTab] = useState(0);
    const [data, setData] = useState([]);
    const [json, setJson] = useState('');

    const changed = (e) => {
        const input = e.target.value;

        const parsed = Papa.parse(input, {header: true});

        setData(parsed);
        setJson(JSON.stringify(parsed.data, null, "\t"));
    }

    const tabChange = (e, value) => {
        setTab(value);
    }
    
    return (
        <div className="tabcontainer">
            <AppBar position="static">
                <Tabs value={tab} onChange={tabChange}>
                    <Tab label="CSV Input" />
                    <Tab label="Preview" />
                    <Tab label="JSON"/>
                    <Tab label="SQL Insert" />
                </Tabs>
            </AppBar>
            
            {tab === 0 && <div>
                <TextField 
                    id="pastedinput" 
                    type="text" 
                    label="Pasted Input"
                    variant="outlined"
                    multiline 
                    rows="4"
                    fullWidth
                    margin="normal"
                    onChange={changed}
                    >
                </TextField>                
            </div>}

            {tab === 1 && <div>
                <PreviewResult parsed={data}></PreviewResult>
            </div>}

            {tab === 2 && <div>
                <JsonResult parsed={data}></JsonResult>
            </div>}

            {tab === 3 && <div>
                <SQLResult parsed={data}></SQLResult>
            </div>}

        </div>
    )
}