'use client';

import { parseCSV } from '@/utils/parseCSV';
import { bulkUploadProducts } from '@/actions';

export default function BulkUpload() {
  const parseData = async (formData: FormData) => {
    const file = formData.get('file') as File;
    const data = await parseCSV(file);
    bulkUploadProducts(data);
  };

  return (
    <main className='flex flex-col'>
      Upload bulk files here!
      <form action={parseData}>
        <input type='file' name='file' />
        <button type='submit'>Upload</button>
      </form>
    </main>
  );
}
