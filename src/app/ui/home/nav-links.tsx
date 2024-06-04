"use client"
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: 'intro', },
  { name: 'About', href: 'about', },
  { name: 'Skills', href: 'skills', },
  { name: 'Projects', href: 'projects', },
  { name: 'Contact', href: 'contact', },
];

export default function NavLinks() {

  return (
    <div className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-500'>
      {links.map((link) => {
        return (
          // <Link
          //   key={link.name}
          //   href={link.href}
          //   className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-500 md:p-0 md:dark:hover:text-slate-500 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500'
          // >
          //   {link.name}
          // </Link>
          <Link
            key={link.name}
            href={link.href}
            className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-500 md:p-0 md:dark:hover:text-slate-500 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500 hover:cursor-pointer'
          >
            {link.name}
            
          </Link>
        );
      })}
    </div>
  )
}
