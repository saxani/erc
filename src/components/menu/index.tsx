'use server';

import { fetchCategories } from '@/db/queries/categories';
import formatMenu from '@/utils/formatMenu';

export default async function Menu() {
  const categories = await fetchCategories();
  const formattedMenuData = await formatMenu(categories);

  return (
    <ul>
      {formattedMenuData.map((el) => (
        <li key={el.id}>{el.name}</li>
      ))}
    </ul>
  );
}
