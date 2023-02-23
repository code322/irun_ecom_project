import { FC } from 'react';
import './FilterBy.scss';

const FilterBy: FC = () => {
  return (
    <div className='filter-by-container'>
      <input type='text' placeholder='Search...' />
      <div className='price-range-container'>
        <span>Price Range</span>
        <div className='ranges-input-container'>
          <input min={0} max={1000} type='number' placeholder='min' />
          <input min={0} max={1000} type='number' placeholder='max' />
        </div>
      </div>
      <div>
        <span>Gender: </span>
        <br />
        <select name='' id=''>
          <option value='All'>All</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBy;
