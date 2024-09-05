import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';

export default function Header() {
  return (
    <Navbar className='bg-primary text-white'>
      <NavbarBrand>
        <Link href='/' className='font-bold text-white'>
          Essity Resource Center
        </Link>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem>Call us at (905) 364-3325</NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
