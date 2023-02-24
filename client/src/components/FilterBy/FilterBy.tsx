import { FC, useState } from 'react';
import './FilterBy.scss';
import { priceRangeType } from '../../pages/Shop/Shop';
interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPriceRange: React.Dispatch<React.SetStateAction<priceRangeType>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  priceRange: priceRangeType;
}
const FilterBy: FC<Props> = (props: Props) => {
  const { setPriceRange, setSearch, setGender } = props;
  const [rangeValue, setRangeValue] = useState({
    min: 0,
    max: 0,
  });

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleGender(e: React.ChangeEvent<HTMLSelectElement>) {
    setGender(e.target.value);
  }
  function handlePriceRange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setRangeValue({
      ...rangeValue,
      [name]: Number(value),
    });
    if (rangeValue.max === 0 && rangeValue.min === 0) {
      setPriceRange({
        min: 0,
        max: 0,
      });
    }
  }

  function handleFilterRange() {
    setPriceRange({
      min: rangeValue.min,
      max: rangeValue.max,
    });
  }

  return (
    <div className='filter-by-container'>
      <input onChange={handleSearch} type='text' placeholder='Search...' />
      <div className='price-range-container'>
        <span className='filter-by-title'>Price Range</span>
        <div className='price-range'>
          <div className='ranges-input-container'>
            <input
              name='min'
              onChange={handlePriceRange}
              min={0}
              max={300}
              type='number'
              placeholder='min'
            />
            <input
              onChange={handlePriceRange}
              name='max'
              min={80}
              max={300}
              type='number'
              placeholder='max'
            />
          </div>
          <button onClick={handleFilterRange}>Go</button>
        </div>
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
