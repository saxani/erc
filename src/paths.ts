const paths = {
  home() {
    return '/';
  },
  categoryShow(categoryPath: string) {
    return `/products/${categoryPath}`;
  },
  productShow(productSlug: string) {
    return `/products/${productSlug}`;
  },
};

export default paths;
