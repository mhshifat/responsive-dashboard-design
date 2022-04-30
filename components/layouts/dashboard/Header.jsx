import Image from 'next/image'
import Dropdown from './../../common/Dropdown'
import SearchInput from './../../common/SearchInput'

export default function DashboardHeader() {
  return (
    <header className="flex h-16 items-center bg-white py-3 px-9 shadow">
      <div className="w-max lg:w-[calc(236px-36px)]">
        <Dropdown label="Starbucks" />
      </div>
      <div className="px-6">
        <SearchInput />
      </div>
      <div className="flex flex-1 justify-end gap-5">
        <div className="flex shrink-0 items-center">
          <Image
            src="/images/header-bell-icon.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <div className="flex shrink-0 items-center">
          <Image
            src="/images/header-profile-icon.svg"
            alt=""
            width={32}
            height={32}
          />
        </div>
        <Dropdown label="John Doe" />
      </div>
    </header>
  )
}
