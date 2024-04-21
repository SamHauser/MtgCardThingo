import './App.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button,  TextField } from '@mui/material';
import {  CSVLink } from 'react-csv';

var scryfall = require("scryfall-client")




function App() {
  const [rows,setRows] = React.useState([{name: "test", id: "test", code: "test", num:"test"}])
  
  const updateTable = (event)=>  {  

    event.preventDefault();
    scryfall.getCardBySetCodeAndCollectorNumber(event.target[0].value, event.target[2].value)
    .then(function (list) {
      console.log(list)
      setRows(prev => [...prev, {name: list.name, id: list.id, code: list.set, num: list.collector_number}])
    })
    
  }
  const BasicTable = () => {
  
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Card Name</TableCell>
              <TableCell align="right">Set code</TableCell>
              <TableCell align="right">Collect Num</TableCell>
              <TableCell align="right">Scryfall ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.code}</TableCell>
                <TableCell align="right">{row.num}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return (
    <div>
      <header >
        <form onSubmit={updateTable}>
        <TextField id="code" label="code" variant="outlined" />
        <TextField id="number" label="number" variant="outlined" />
        
        <Button type="submit" variant="contained">add</Button>
        
        </form>
        <BasicTable />
        <CSVLink data={rows} target="_blank" >
          Please download me
        </CSVLink>

      </header>
    </div>
  );
}

export default App;
