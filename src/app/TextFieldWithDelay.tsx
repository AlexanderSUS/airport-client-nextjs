'use client'

import { FC, useEffect, useState } from 'react';
import { TextField } from '@mui/material';

type Props = {
  value: string;
  label: string;
  onChange: (value: string) => void;
};

const TextFieldWithDelay: FC<Props> = ({ value, onChange, label }) => {
  const [isDelay, setIsDelay] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);

    if (!isDelay) {
      setIsDelay(true);
    }
  };

  useEffect(() => {
    if (isDelay) {
      const timeout = setTimeout(() => {
        onChange(searchValue);
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isDelay, searchValue, onChange]);

  useEffect(() => {
    if (!value) {
      setSearchValue('');
    }
  }, [value]);

  return (
    <TextField label={label} value={searchValue} onChange={handleChange} />
  );
};

export default TextFieldWithDelay;