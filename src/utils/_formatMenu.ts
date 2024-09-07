import type { Category } from '@prisma/client';
import { MenuItem } from '@/types/product.types';

interface MenuItemType {
  id: string;
  name: string;
  path: string;
  children: MenuItemType[];
}

// Gotta do something recursive with nested children in a menu
const parseChild = (
  item: Category,
  menuItems: string[],
  menuLevel: MenuItemType
) => {
  // 1st time, 3 items, not equal
  if (menuItems.length == 1) {
    menuLevel.children.push({
      id: item.id,
      name: menuItems[0],
      path: item.path,
      children: [],
    });

    return menuLevel;
  }

  const nestedMenuElement = menuLevel.children.indexOf(menuItems[0]);

  // 1st time more than 2 items, go deeper in object
  parseChild(item, menuItems.slice(1), menuLevel.children[nestedMenuElement]);

  return menuLevel;
};

const formatMenu = (categories: Category[]): Promise<MenuItem[]> => {
  return new Promise((resolve, reject) => {
    const editCategories = structuredClone(categories);
    let formattedMenu = {
      id: 'main-menu',
      path: '/',
      name: 'all',
      children: [],
    };

    for (let item of editCategories) {
      // item = { path: 'Programs/LTC Wound Care/Skin Tears', id: 'xxxxxx' }
      const split = item.path.split('/');

      // split = ['Programs', 'LTC Wound Care', 'Skin Tears']
      formattedMenu = parseChild(item, split, formattedMenu);

      // if (split.length <= 1) {
      //   formattedMenu.push({
      //     id: item.id,
      //     name: item.path,
      //     path: item.path,
      //     children: [],
      //   });
      // } else {
      //   //Will do something eventually!
      // }
    }

    resolve(formattedMenu);
  });
};

export default formatMenu;
