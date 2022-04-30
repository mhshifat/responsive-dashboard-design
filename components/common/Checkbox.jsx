export default function Checkbox() {
  return (
    <label className="flex items-center justify-center">
      <input type="checkbox" className="hidden" />
      <span className="flex h-4 w-4 items-center justify-center rounded border-[1px] border-[#D2D2D5] bg-[transparent]" />
    </label>
  )
}
