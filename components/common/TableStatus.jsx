import { STATUS_TYPE } from '../../constants'

export default function TableStatus({ data }) {
  return (
    <span className="flex items-center gap-2">
      <span className="hidden md:inline-flex">{data}</span>
      <span
        className={`flex h-2 w-2 rounded-full ${
          data === STATUS_TYPE.ALRIGHT
            ? 'bg-success'
            : data === STATUS_TYPE.IN_PROGRESS
            ? 'bg-warning'
            : data === STATUS_TYPE.OUT_OF_STOCK
            ? 'bg-error'
            : ''
        }`}
      />
    </span>
  )
}
