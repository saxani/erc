'use client';

import { parseCSV } from '@/utils/parseCSV';
import { bulkAddCategories } from '@/actions';

export default function AddCategories() {
  const parseData = async (formData: FormData) => {
    const file = formData.get('file') as File;
    const data = await parseCSV(file);
    bulkAddCategories(data);
  };

  return (
    <main className='flex flex-col'>
      Upload new categories here!
      <form action={parseData}>
        <input type='file' name='file' />
        <button type='submit'>Upload</button>
      </form>
    </main>
  );
}
