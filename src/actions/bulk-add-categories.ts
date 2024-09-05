'use server';
import { db } from '@/db';

export async function bulkAddCategories(categories: any) {
  const { data } = categories;
  let newCat;

  for (let item of data) {
    try {
      newCat = await db.category.create({
        data: {
          path: item.fullPath,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      } else {
        return 'Something went wrong;';
      }
    }
  }
}
