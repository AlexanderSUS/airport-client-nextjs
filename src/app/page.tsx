import TablePaginationActions from '../components/table/TablePagination'
import SearchBox from './SearchBox'
import { FlightsSearchResponse } from './types';
import FlightsSearchResultsTable from './FlightsSearchResultTable';

const titles = [ 
  'Date', 
  'From country', 
  'From city', 
  'From iata', 
  'From time', 
  'To country', 
  'To city', 
  'To iata', 
  'To time', 
  'Aircraft', 
  'Seats left' 
];

const BASE_URL = 'http://localhost:5000/api/v1/'

const getFlights = async () => {
  const res = await fetch(BASE_URL + 'flights-search');

  return res.json() as Promise<FlightsSearchResponse>;
}



export default async function Home() {
  const { data } = await getFlights();

  return (
    <>
      <SearchBox />
      <FlightsSearchResultsTable titles={titles} data={data}  />
      <TablePaginationActions />
    </>
  )
}
