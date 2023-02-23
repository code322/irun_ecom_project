import { FC } from 'react';
import './FilterBy.scss';
import { priceRangeType } from '../../pages/Shop/Shop';
interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPriceRange: React.Dispatch<React.SetStateAction<priceRangeType>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}
const FilterBy: FC<Props> = (props: Props) => {
  const { setPriceRange, setSearch, setGender } = props;

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleGender(e: React.ChangeEvent<HTMLSelectElement>) {
    setGender(e.target.value);
  }

  return (
    <div className='filter-by-container'>
      <input onChange={handleSearch} type='text' placeholder='Search...' />
      <div className='price-range-container'>
        <span>Price Range</span>
        <div className='ranges-input-container'>
          <input min={0} max={1000} type='number' placeholder='min' />
          <input min={80} max={1000} type='number' placeholder='max' />
        </div>
      </div>
      <div>
        <span>Gender: </span>
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
