import type { Category } from '@prisma/client';
import { db } from '@/db';

export function fetchCategories(): Promise<Category[]> {
  return db.category.findMany();
}
