import { product } from '../redux/actions/product/actionTypes';
export const regexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validEmail = (emailVal: string) => {
  return regexp.test(emailVal);
};

export const filterProducts = (
  search: string | undefined,
  selectGender: string | undefined,
  priceRange: number[] | undefined,
  products: product[]
): product[] => {
  const ALL_GENDERS = 'all';

  if (search && priceRange) {
    let data = products.filter(({ title, price, gender }) => {
      if (selectGender !== ALL_GENDERS) {
        return (
          title.toLowerCase().includes(search.toLowerCase()) &&
          gender.toLowerCase() === selectGender &&
          price >= priceRange[0] &&
          price <= priceRange[1]
        );
      } else {
        return (
          title.toLowerCase().includes(search.toLowerCase()) &&
          price >= priceRange[0] &&
          price <= priceRange[1]
        );
      }
    });
    return data;
  } else if (!search && priceRange) {
    let data = products.filter(({ title, price, gender }) => {
      if (selectGender !== ALL_GENDERS) {
        return (
          gender.toLowerCase() === selectGender &&
          price >= priceRange[0] &&
          price <= priceRange[1]
        );
      } else {
        return price >= priceRange[0] && price <= priceRange[1];
      }
    });
    return data;
  }

  return products;
};
