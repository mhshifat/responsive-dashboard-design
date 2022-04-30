export default function Dropdown({ label }) {
  return (
    <div>
      <button className="relative whitespace-nowrap pr-4 text-sm font-medium before:absolute before:top-1/2 before:right-0 before:-translate-y-1/3 before:transform before:border-l-4 before:border-r-4 before:border-t-[5px] before:border-l-[transparent] before:border-r-[transparent] before:border-b-primary-text before:content-['']">
        {label}
      </button>
    </div>
  )
}
