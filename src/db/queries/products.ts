import { Product } from '@prisma/client';
import { db } from '@/db';

export function fetchProductsByCategory(category: string): Promise<Product[]> {
  return db.product.findMany({
    where: {
      categories: {
        some: {
          category: {
            path: category,
          },
        },
      },
      NOT: {
        type: 'Variant',
      },
    },
  });
}
