import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function(props){
    let { parsed } = props;

    if (!parsed || !parsed.data) return ( <div></div> );
    
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {parsed.meta.fields.map( (h,i) => <TableCell key={i}>{h}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {parsed.data.map( (row, rowIndex) => 
                    <TableRow key={rowIndex}>
                        {Object.keys(row).map( (key, keyIndex) => <TableCell key={rowIndex+keyIndex}>{row[key]}</TableCell>)}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}