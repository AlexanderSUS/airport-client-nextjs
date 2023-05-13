import React, { FC, PropsWithChildren } from 'react';
import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'

import { StyledTableCell } from './tableComponents';

type Props = {
  titles: string[]
};

const TableGeneric: FC<PropsWithChildren<Props>> = ({ titles, children }) => (
  <TableContainer component={Paper}>
    <Table size="small">
      <TableHead>
        <TableRow>
          {titles.map((title) => (
            <StyledTableCell key={title}>{title}</StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {children}
      </TableBody>
    </Table>
  </TableContainer>

);

export default TableGeneric;