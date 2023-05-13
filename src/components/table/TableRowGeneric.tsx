import { FC } from 'react';
import { StyledTableCell, StyledTableRow } from './tableComponents';

type Props = {
  cellsData: string[];
} 

const TableRowGeneric: FC<Props> = ({cellsData }) => {
  return (
    <StyledTableRow>
      {cellsData.map((data) => <StyledTableCell key={data}>{data}</StyledTableCell>)}
    </StyledTableRow>
  )
}

export default TableRowGeneric

