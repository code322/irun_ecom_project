import { FC } from 'react';
import './FilterBy.scss';

const FilterBy: FC = () => {
  return (
    <div className='filter-by-container'>
      <input type='text' placeholder='Search By Item Name' />
      <div>
        <span>Price Range</span>
        <input type='text' placeholder='min' />
        <input type='text' placeholder='max' />
      </div>
      <div>
        <span>Filter by Gender: </span>
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
