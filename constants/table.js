import TableStatus from './../components/common/TableStatus'

export const DUMMY_TABLE_HEADER = [
  {
    title: 'Date Updated',
    className: 'hidden md:flex',
    align: 'left',
    icon: '/images/table-arrow-down.svg',
    key: 'updatedAt',
  },
  {
    title: 'Title',
    className: '',
    align: 'left',
    icon: '/images/table-both-arrow.svg',
    key: 'title',
  },
  {
    title: 'Details',
    className: 'hidden lg:flex',
    align: 'left',
    key: 'details',
  },
  {
    title: 'Status',
    className: '',
    align: 'left',
    key: 'status',
  },
  {
    title: 'Quantity',
    className: '',
    align: 'right',
    key: 'quantity',
  },
  {
    title: 'Unit Price',
    className: 'hidden lg:flex',
    align: 'right',
    key: 'price',
  },
  {
    title: 'Amount',
    className: '',
    align: 'right',
    icon: '/images/table-both-arrow.svg',
    key: 'amount',
  },
]

export const DUMMY_TABLE_DATA = [
  {
    updatedAt: '11 Nov 2021',
    title: 'Hammer',
    details: 'This is a hammer to do work with',
    status: <TableStatus data="Alright" />,
    quantity: (
      <span>
        <b>200</b>/300
      </span>
    ),
    price: '$10',
    amount: '$2000.00',
  },
  {
    updatedAt: '10 Nov 2021',
    title: 'Hammer',
    details: 'This is a Screw to do work with',
    status: <TableStatus data="Alright" />,
    quantity: (
      <span>
        <b>122</b>/230
      </span>
    ),
    price: '$10',
    amount: '$1220.00',
  },
  {
    updatedAt: '6 Nov 2021',
    title: 'Hammer',
    details: 'Wood plan will be used to do woodworks, duh',
    status: <TableStatus data="In Progress" />,
    quantity: (
      <span>
        <b>122</b>/230
      </span>
    ),
    price: '$10',
    amount: '$1220.00',
  },
  {
    updatedAt: '28 Oct 2021',
    title: 'Hammer',
    details: '-',
    status: <TableStatus data="Out of Stock" />,
    quantity: (
      <span>
        <b>0</b>/200
      </span>
    ),
    price: '$10',
    amount: '$0.00',
  },
  {
    updatedAt: '28 Oct 2021',
    title: 'Hammer',
    details: '-',
    status: <TableStatus data="Out of Stock" />,
    quantity: (
      <span>
        <b>0</b>/200
      </span>
    ),
    price: '$10',
    amount: '$0.00',
  },
  {
    updatedAt: '28 Oct 2021',
    title: 'Hammer',
    details: '-',
    status: <TableStatus data="Out of Stock" />,
    quantity: (
      <span>
        <b>0</b>/200
      </span>
    ),
    price: '$10',
    amount: '$0.00',
  },
  {
    updatedAt: '11 Nov 2021',
    title: 'Hammer',
    details: 'This is a hammer to do work with',
    status: <TableStatus data="Alright" />,
    quantity: (
      <span>
        <b>200</b>/300
      </span>
    ),
    price: '$10',
    amount: '$2000.00',
  },
  {
    updatedAt: '11 Nov 2021',
    title: 'Hammer',
    details: 'This is a hammer to do work with',
    status: <TableStatus data="Alright" />,
    quantity: (
      <span>
        <b>200</b>/300
      </span>
    ),
    price: '$10',
    amount: '$2000.00',
  },
  {
    updatedAt: '11 Nov 2021',
    title: 'Hammer',
    details: 'This is a hammer to do work with',
    status: <TableStatus data="Alright" />,
    quantity: (
      <span>
        <b>200</b>/300
      </span>
    ),
    price: '$10',
    amount: '$2000.00',
  },
  {
    updatedAt: '11 Nov 2021',
    title: 'Hammer',
    details: 'This is a hammer to do work with',
    status: <TableStatus data="Alright" />,
    quantity: (
      <span>
        <b>200</b>/300
      </span>
    ),
    price: '$10',
    amount: '$2000.00',
  },
]
