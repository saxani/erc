'use client';
import { useState } from 'react';
import paths from '@/paths';
import Link from 'next/link';

const MenuItem = ({ data }: any) => {
  const [show, setShow] = useState(false);
  const hasChildren = data.children.length > 0 ? true : false;

  return (
    <li>
      {hasChildren ? (
        <span onClick={() => setShow(!show)} className='cursor-pointer'>
          {data.name}
        </span>
      ) : (
        <Link href={paths.categoryShow(data.path)}>{data.name}</Link>
      )}
      {data.children.length > 0 && show && <MenuSection data={data} />}
    </li>
  );
};

export default function MenuSection({ data }: any) {
  return (
    <ul style={{ marginLeft: '25px' }}>
      {data.children.map((el: any) => (
        <MenuItem data={el} key={el.id} />
      ))}
    </ul>
  );
}
