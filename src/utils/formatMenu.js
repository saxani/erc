// Gotta do something recursive with nested children in a menu
const parseChild = (item, menuItems, menuLevel) => {
  if (menuItems.length == 1) {
    menuLevel.children.push({
      id: item.id,
      name: menuItems[0],
      path: item.path,
      children: [],
    });

    return menuLevel;
  }

  const nestedMenuElement = menuLevel.children.findIndex(
    (x) => x.name === menuItems[0]
  );

  parseChild(item, menuItems.slice(1), menuLevel.children[nestedMenuElement]);

  return menuLevel;
};

const formatMenu = (categories) => {
  return new Promise((resolve, reject) => {
    const editCategories = structuredClone(categories);
    let formattedMenu = {
      id: 'main-menu',
      path: '/',
      name: 'all',
      children: [],
    };

    for (let item of editCategories) {
      const split = item.path.split('/');
      formattedMenu = parseChild(item, split, formattedMenu);
    }

    resolve(formattedMenu);
  });
};

export default formatMenu;
