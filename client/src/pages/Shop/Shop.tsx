import { useState } from 'react';
import FilterBy from '../../components/FilterBy/FilterBy';
import Products from '../../components/Products/Products';
import './Shop.scss';
export type priceRangeType = {
  min: number;
  max: number;
};
const Shop = () => {
  const [search, setSearch] = useState<string>('');
  const [gender, setGender] = useState<string>('all');

  const [priceRange, setPriceRange] = useState<priceRangeType>({
    min: 0,
    max: 80,
  });

  return (
    <section>
      <div className='bd-container shop-container'>
        <FilterBy
          search={search}
          setSearch={setSearch}
          setPriceRange={setPriceRange}
          setGender={setGender}
          priceRange={priceRange}
        />
        <Products gender={gender} search={search} />
      </div>
    </section>
  );
};

export default Shop;
