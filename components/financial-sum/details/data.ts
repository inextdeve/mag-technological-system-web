const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "ZONE", uid: "zone", sortable: true },
  { name: "DATE", uid: "date", sortable: true },
  { name: "TYPE", uid: "type", sortable: true },
  { name: "FROM", uid: "from" },
  { name: "TO", uid: "to" },
  { name: "QUANTITY", uid: "quantity", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
];

const statusOptions = [
  { name: "Done", uid: "active" },
  { name: "Process", uid: "paused" },
  { name: "Undone", uid: "vacation" },
];

const users = [
  {
    id: 1,
    zone: "Zone 2",
    date: "01/03/2024",
    type: "Transfer",
    from: "Work location",
    to: "Mulhum",
    quantity: 24,
    status: "done",
  },
  {
    id: 4,
    zone: "Zone 2",
    date: "01/03/2024",
    type: "Shipment",
    from: "Main Office",
    to: "Northfield",
    quantity: 60,
    status: "in progress",
  },
  {
    id: 5,
    zone: "Zone 4",
    date: "30/01/2024",
    type: "Delivery",
    from: "Work location",
    to: "Southbay",
    quantity: 20,
    status: "done",
  },
  {
    id: 6,
    zone: "Zone 3",
    date: "18/03/2024",
    type: "Transfer",
    from: "Storage",
    to: "Mulhum",
    quantity: 24,
    status: "cancelled",
  },
];

export { columns, users, statusOptions };
