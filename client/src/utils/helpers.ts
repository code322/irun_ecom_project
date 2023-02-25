import { product } from '../redux/actions/product/actionTypes';
import { priceRangeType } from './../pages/Shop/Shop';
export const regexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validEmail = (emailVal: string) => {
  return regexp.test(emailVal);
};

export const filterProducts = (
  search: string | undefined,
  selectGender: string | undefined,
  priceRange: priceRangeType | undefined,
  products: product[]
): product[] => {
  // filter only by min price
  if (priceRange && priceRange?.min > 0 && priceRange.max === 0) {
    let data = products?.filter(({ price }) => price >= priceRange?.min);
    return data;
  }

  // filter only by max price
  else if (priceRange && priceRange?.max > 0 && priceRange.min === 0) {
    let data = products?.filter(({ price }) => price <= priceRange?.max);
    return data;
  }

  // filter by min and max price range
  else if (priceRange && priceRange?.max > 0 && priceRange.min > 0) {
    let data = products?.filter(
      ({ price }) => price >= priceRange?.min && price <= priceRange?.max
    );
    return data;
  } else if (selectGender === 'all' && !search) {
    return products;
  }
  // filter by characters only
  else if (search && selectGender === 'all') {
    let data = products?.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase())
    );
    return data;
  }
  // filter by characters and gender
  else if (search && selectGender) {
    let data = products?.filter(
      ({ gender, title }) =>
        gender.toLowerCase() === selectGender.toLowerCase() &&
        title.toLowerCase().includes(search.toLowerCase())
    );
    return data;
  }
  // filter by gender only
  else if (selectGender) {
    let data = products?.filter(
      ({ gender }) => gender.toLowerCase() === selectGender.toLowerCase()
    );
    return data;
  } else {
    return products;
  }
};
