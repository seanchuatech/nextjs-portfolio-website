import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

export default function Page() {
  return (
    <main className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Image URL
            </th>
            <th scope="col" className="px-6 py-3">
              Github URL
            </th>
            <th scope="col" className="px-6 py-3">
              Technology
            </th>
            <th scope="col" className="px-6 py-3">
              Display
            </th>
            <th scope="col" className="px-6 py-3">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <div className="flex gap-x-4">
                      <BsInfoCircle />
                      <AiOutlineEdit />
                      <MdOutlineDelete />
                  </div>
                </td>
              </tr>
            <tr>
              <td colSpan="4">
                <p>No projects to display</p>
              </td>
            </tr>
        </tbody>
      </table>
    </main>
  );
}