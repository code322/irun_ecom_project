import React, { FC } from 'react';
import './FilterBy.scss';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  priceRange: number[];
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#999',
    },
    secondary: {
      main: '#F00',
    },
  },
});

const FilterBy: FC<Props> = (props: Props) => {
  const { setPriceRange, priceRange, setSearch, setGender } = props;
  const MIN_DISTANCE = 10;

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleGender(e: React.ChangeEvent<HTMLSelectElement>) {
    setGender(e.target.value);
  }

  function valuetext(value: number) {
    return value.toString();
  }

  const handleRangeChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceRange([
        Math.min(newValue[0], priceRange[1] - MIN_DISTANCE),
        priceRange[1],
      ]);
    } else {
      setPriceRange([
        priceRange[0],
        Math.max(newValue[1], priceRange[0] + MIN_DISTANCE),
      ]);
    }
  };

  return (
    <div className='filter-by-container'>
      <input onChange={handleSearch} type='text' placeholder='Search...' />
      <div className='price-range-container'>
        <span className='filter-by-title'>Price Range:</span>
        <ThemeProvider theme={theme}>
          <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={priceRange}
            onChange={handleRangeChange}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
            min={0}
            max={200}
            disableSwap
          />
        </ThemeProvider>
      </div>
      <div>
        <span className='filter-by-title'>Gender: </span>
        <br />
        <select name='' id='gender' onChange={handleGender}>
          <option value='all'>All</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBy;
