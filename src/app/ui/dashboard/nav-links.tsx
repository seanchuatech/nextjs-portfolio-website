import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', },
  { name: 'Projects', href: '/dashboard/projects', },
  { name: 'Create Project', href: '/dashboard/projects/create', },
  { name: 'Users', href: '/dashboard/users', },
  { name: 'Create User', href: '/dashboard/users/create', },
];

export default function NavLinks() {

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <div className="space-y-2 font-medium">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            >
              <span className="flex-1 ms-3 whitespace-nowrap">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  )
}
