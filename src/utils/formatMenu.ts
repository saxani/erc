import type { Category } from '@prisma/client';
import { MenuItem } from '@/types/product.types';

const formatMenu = (categories: Category[]): Promise<MenuItem[]> => {
  return new Promise((resolve, reject) => {
    const editCategories = structuredClone(categories);
    const formattedMenu = [];

    for (let item of editCategories) {
      const split = item.path.split('/');

      if (split.length <= 1) {
        formattedMenu.push({
          id: item.id,
          name: item.path,
          path: item.path,
          children: [],
        });
      } else {
        //Will do something eventually!
      }
    }

    resolve(formattedMenu);
  });
};

export default formatMenu;
