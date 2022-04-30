import Image from 'next/image'
import { DUMMY_TABLE_DATA, DUMMY_TABLE_HEADER } from '../../constants'
import Checkbox from './Checkbox'
import SearchInput from './SearchInput'
import * as ReactDOMServer from 'react-dom/server'

export default function Table() {
  return (
    <div>
      <div className="py-6 px-4">
        <SearchInput />
      </div>
      <table className="w-full border-collapse px-4">
        <thead>
          <tr className="bg-[#FDF4ED]">
            <th className="hidden w-5 py-[10px] px-4 text-[13px] font-medium md:table-cell">
              <div className="flex items-center justify-start">
                <Checkbox />
              </div>
            </th>
            {DUMMY_TABLE_HEADER.map((item) => (
              <th
                key={item.title}
                className={`whitespace-nowrap py-[10px] px-4 text-[13px] font-medium ${item.className}`}
              >
                <div
                  className={`flex flex-1 items-center ${
                    item.align === 'right'
                      ? 'justify-end'
                      : item.align === 'center'
                      ? 'justify-center'
                      : 'justify-start'
                  }`}
                >
                  {item.title}
                  {item.icon && (
                    <span className="ml-1 flex items-center justify-center">
                      <Image src={item.icon} alt="" width={15} height={15} />
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DUMMY_TABLE_DATA.map((row, rowId) => (
            <tr key={rowId}>
              <td className="hidden w-5 py-5 px-4 text-[13px] font-medium md:table-cell">
                <div className="flex items-center justify-start">
                  <Checkbox />
                </div>
              </td>
              {DUMMY_TABLE_HEADER.map((header) => (
                <td
                  key={header.title}
                  className={`py-5 px-4 text-base font-normal ${header.className}`}
                >
                  <div
                    className={`flex flex-1 items-center ${
                      header.align === 'right'
                        ? 'justify-end'
                        : header.align === 'center'
                        ? 'justify-center'
                        : 'justify-start'
                    }`}
                  >
                    {row[header.key]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
