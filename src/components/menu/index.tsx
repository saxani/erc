'use server';

import { fetchCategories } from '@/db/queries/categories';
import formatMenu from '@/utils/formatMenu.js';
import MenuSection from './menuSection';

export default async function Menu() {
  const categories = await fetchCategories();
  const formattedMenuData: any = await formatMenu(categories);

  return <MenuSection data={formattedMenuData} />;
}
