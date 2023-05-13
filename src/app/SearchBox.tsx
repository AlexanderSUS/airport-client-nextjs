'use client'

import TextFieldWithDelay from './TextFieldWithDelay';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Box, Stack } from '@mui/material';

const SearchBox = () => {
  return (
    <>
      <Stack spacing={2} py={2}>
        <Stack direction='row' spacing={2} >
          <TextFieldWithDelay label='From' value='' onChange={() => {}} />
          <TextFieldWithDelay label='To' value='' onChange={() => {}}/>
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack direction='row' spacing={2} >
          <DatePicker label="start" defaultValue={dayjs('2023-05-05')} />
          <DatePicker label="end"  defaultValue={dayjs('2023-05-05')} />
        </Stack>
        </LocalizationProvider>
        <Box>
          <TextFieldWithDelay label='Seats available' value='' onChange={() => {}} />
        </Box>
      </Stack>
    </>
  )
}

export default SearchBox