import { FC } from 'react';
import './FilterBy.scss';
interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const FilterBy: FC<Props> = (props: Props) => {
  const { search, setSearch } = props;
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
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
