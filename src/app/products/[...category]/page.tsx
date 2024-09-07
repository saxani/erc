import { fetchProductsByCategory } from '@/db/queries/products';

interface CategoryShowPageProps {
  params: {
    category: string[];
  };
}

export default async function categoryShowPage({
  params,
}: CategoryShowPageProps) {
  const category = params.category.join('/').replace('%20', ' ');
  const data = await fetchProductsByCategory(category);

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <h1 className='text-2xl font-bold mb-2'>Category</h1>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
