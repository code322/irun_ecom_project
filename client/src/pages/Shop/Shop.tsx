import FilterBy from '../../components/FilterBy/FilterBy';
import Products from '../../components/Products/Products';
import './Shop.scss';
const Shop = () => {
  return (
    <section>
      <div className='bd-container shop-container'>
        <FilterBy />

        <Products />
      </div>
    </section>
  );
};

export default Shop;
