import { useState } from 'react';
import FilterBy from '../../components/FilterBy/FilterBy';
import Products from '../../components/Products/Products';
import './Shop.scss';

const Shop = () => {
  const [search, setSearch] = useState<string>('');
  const [gender, setGender] = useState<string>('all');

  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);

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
        <Products gender={gender} search={search} priceRange={priceRange} />
      </div>
    </section>
  );
};

export default Shop;
