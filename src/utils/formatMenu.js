// Gotta do something recursive with nested children in a menu
const parseChild = (item, menuItems, menuLevel) => {
  if (menuItems.length == 1) {
    menuLevel.children.push({
      id: item.id,
      name: menuItems[0],
      path: item.path,
      children: [],
    });

    // sort by name
    menuLevel.children.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
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
