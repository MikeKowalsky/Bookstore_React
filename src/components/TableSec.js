import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const tableSec = (props) => {

    const styles = {
        root: {
            margin: 20,
            overflowX: 'auto',
        },
        table: {
            minWidth: 700,
        }
    };

  return (
        <Paper style={styles.root}>
            <Table style={styles.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Titulo</TableCell>
                        <TableCell>Idioma</TableCell>
                        <TableCell>Descripcion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.booksArray.map((row, index) =>
                        <TableRow key={index}>
                            <TableCell>{row.titulo}</TableCell>
                            <TableCell>{row.idioma}</TableCell>
                            <TableCell>{row.descripcion}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Paper>
  );
}

export default tableSec;