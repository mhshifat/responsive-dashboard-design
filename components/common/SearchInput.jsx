import Image from 'next/image'

export default function SearchInput() {
  return (
    <div className="hidden h-10 w-full rounded-lg bg-secondary px-3 md:flex md:w-[392px]">
      <Image
        src="/images/search-input-icon.svg"
        alt=""
        width={16}
        height={16}
      />
      <input
        className="h-full w-full border-none bg-[transparent] py-3 pl-[10px] text-base font-normal text-secondary-text outline-none placeholder:text-base placeholder:font-normal placeholder:text-secondary-text"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}
