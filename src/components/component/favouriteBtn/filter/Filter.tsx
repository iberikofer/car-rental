import type { FC } from 'react';
import type { Car } from '../../../../types/car';

interface FilterProps {
  carsList?: Car[];
  filter?: string;
  filterChange?: (val: string) => void;
}

export const Filter: FC<FilterProps> = ({ carsList = [], filter = '', filterChange }) => {
  const brandList: string[] = [];

  carsList.forEach(car => brandList.push(car.make));
  const uniqueBrands = Array.from(new Set(brandList));

  return (
    <div>
      <span>Filter: </span>
      <input
        value={filter}
        onChange={e => filterChange && filterChange(e.target.value)}
      />
      <ul>
        {uniqueBrands.map(brand => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
