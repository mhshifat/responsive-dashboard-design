import Image from 'next/image'
import { SIDEBAR_LINKS } from './../../../constants'

export default function DashboardSidebar() {
  return (
    <div className="fixed bottom-0 h-[72px] w-full bg-white py-4 px-6 shadow md:relative md:h-auto md:w-max md:border-r-[1px] md:border-border md:bg-[transparent] md:shadow-none lg:w-[236px]">
      <div className="flex justify-between gap-2 md:flex-col">
        {SIDEBAR_LINKS.map((link, linkIdx) => (
          <button
            key={link.name}
            className={`flex items-center ${
              linkIdx === 1
                ? 'rounded-md bg-white md:shadow'
                : 'bg-[transparent]'
            }`}
          >
            <span className="flex h-10 w-10 items-center justify-center">
              <Image src={link.icon} alt="" width={20} height={20} />
            </span>
            <span
              className={`hidden text-sm lg:flex ${
                linkIdx === 1 ? 'text-primary' : 'text-secondary-text'
              }`}
            >
              {link.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
