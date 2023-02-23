import { useState } from 'react';
import FilterBy from '../../components/FilterBy/FilterBy';
import Products from '../../components/Products/Products';
import './Shop.scss';
const Shop = () => {
  const [search, setSearch] = useState<string>('');
  console.log(search);
  return (
    <section>
      <div className='bd-container shop-container'>
        <FilterBy search={search} setSearch={setSearch} />
        <Products />
      </div>
    </section>
  );
};

export default Shop;
