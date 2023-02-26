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
  const ALL_GENDERS = 'all';

  if (search && priceRange) {
    let data = products.filter(({ title, price, gender }) => {
      if (selectGender !== ALL_GENDERS) {
        return (
          title.toLowerCase().includes(search.toLowerCase()) &&
          gender.toLowerCase() === selectGender &&
          price >= priceRange?.min &&
          price <= priceRange?.max
        );
      } else {
        return (
          title.toLowerCase().includes(search.toLowerCase()) &&
          price >= priceRange?.min &&
          price <= priceRange?.max
        );
      }
    });
    return data;
  } else if (!search && priceRange) {
    let data = products.filter(({ title, price, gender }) => {
      if (selectGender !== ALL_GENDERS) {
        return (
          gender.toLowerCase() === selectGender &&
          price >= priceRange?.min &&
          price <= priceRange?.max
        );
      } else {
        return price >= priceRange?.min && price <= priceRange?.max;
      }
    });
    return data;
  }

  return products;
};
