'use client'
import { FC } from 'react';
import TableGeneric from '../components/table/TableGeneric';
import TableRowGeneric from '../components/table/TableRowGeneric';
import { FlightsSearchData } from './types';

type Props = {
  data: FlightsSearchData[];
  titles: string[]
}

const FlightsSearchResultsTable: FC<Props> = ({ data = [], titles}) => {
  return (
    <TableGeneric titles={titles}>
      {data.map((d) => 
        <TableRowGeneric key={d.id} cellsData={[d.date, 
        d.departureCountry,d.departureCity,d.departureAirportIata,
        d.departureTime,
        d.arrivalCountry,d.arrivalCity,d.arrivalAirportIata,d.arrivalTime,
        d.aircraftModel,d.availableSeats.toString(),
        ]}/>
      )}
    </TableGeneric>
  )
}

export default FlightsSearchResultsTable;