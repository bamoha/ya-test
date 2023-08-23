const tableSchema = [
  { name: "S/N", isVisible: true, accessor: "serial_count" },
  {
    name: "First Name",
    accessor: "customer.firstName",
    isVisible: true,
  },
  {
    name: "Last Name",
    accessor: "customer.lastName",
    isVisible: true,
  },
  {
    name: "Quantity",
    accessor: "quantity",
    isVisible: true,
    sortable: true,
  },
  {
    name: "Date",
    isVisible: true,
    accessor: "businessDate",
  },
  {
    name: "Status",
    accessor: "status",
    isVisible: true,
  },
  {
    name: "Shift",
    accessor: "shift",
    isVisible: true,
  },
  {
    name: "Start",
    accessor: "start",
    isVisible: false,
    type: "date",
  },
  {
    name: "End",
    accessor: "end",
    isVisible: false,
    type: "date",
  },
  {
    name: "Area",
    accessor: "area",
    isVisible: true,
  },
  {
    name: "Notes",
    accessor: "guestNotes",
    isVisible: false,
  },
];

export default tableSchema;
