import React from "react";
const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "EQUIPMENT CODE", uid: "age", sortable: true },
  { name: "TYPE", uid: "role", sortable: true },
  { name: "DRIVER NAME", uid: "name", sortable: true },

  { name: "STATUS", uid: "status", sortable: true },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    name: "Ali Ahmed",
    role: "Software Developer",
    team: "Development",
    status: "active",
    age: "32",
    avatar:
      "https://s3.amazonaws.com/media.mixrank.com/profilepic/a26042879f4732479cdb90fa2f775364",
    email: "ali.ahmed@example.com",
  },
  {
    id: 2,
    name: "Omar Hassan",
    role: "Designer",
    team: "Design",
    status: "active",
    age: "29",
    avatar:
      "https://s3.amazonaws.com/media.mixrank.com/profilepic/a26042879f4732479cdb90fa2f775364",
    email: "omar.hassan@example.com",
  },
  {
    id: 3,
    name: "Yusuf Ibrahim",
    role: "Sales Manager",
    team: "Sales",
    status: "paused",
    age: "35",
    avatar:
      "https://media.licdn.com/dms/image/C4D03AQHHNf6qxCaRcg/profile-displayphoto-shrink_200_200/0/1597080932445?e=2147483647&v=beta&t=6fru3AkDL_Jy4_ZIveG2CdWK9LMxVxhmHlkkZxn20Gg",
    email: "yusuf.ibrahim@example.com",
  },
  {
    id: 4,
    name: "Khaled Mahmoud",
    role: "Human Resources",
    team: "HR",
    status: "active",
    age: "40",
    avatar:
      "https://media.licdn.com/dms/image/C5603AQH-MmXjWFIjng/profile-displayphoto-shrink_200_200/0/1517352229975?e=2147483647&v=beta&t=Ee5KICDAjH2XPHRWvPAFEc1U2CZey0PWsthJCd-p2rM",
    email: "khaled.mahmoud@example.com",
  },
  {
    id: 5,
    name: "Ahmed Al-Farsi",
    role: "Software Developer",
    team: "Development",
    status: "paused",
    age: "27",
    avatar:
      "https://media.licdn.com/dms/image/C4D03AQHHNf6qxCaRcg/profile-displayphoto-shrink_200_200/0/1597080932445?e=2147483647&v=beta&t=6fru3AkDL_Jy4_ZIveG2CdWK9LMxVxhmHlkkZxn20Gg",
    email: "ahmed.alfarsi@example.com",
  },
  {
    id: 6,
    name: "Mohammed Saeed",
    role: "Designer",
    team: "Design",
    status: "active",
    age: "30",
    avatar:
      "https://media.licdn.com/dms/image/C5603AQH-MmXjWFIjng/profile-displayphoto-shrink_200_200/0/1517352229975?e=2147483647&v=beta&t=Ee5KICDAjH2XPHRWvPAFEc1U2CZey0PWsthJCd-p2rM",
    email: "mohammed.saeed@example.com",
  },
  {
    id: 7,
    name: "Fahad Nasser",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "33",
    avatar:
      "https://media.licdn.com/dms/image/C5603AQGWIWC_OIILLA/profile-displayphoto-shrink_200_200/0/1627977982489?e=2147483647&v=beta&t=A7YuWB8vKuoUAm9R1wUOr88D4JDBdMJhIUuuujNAUI4",
    email: "fahad.nasser@example.com",
  },
  {
    id: 8,
    name: "Hussein Ali",
    role: "Human Resources",
    team: "HR",
    status: "active",
    age: "38",
    avatar:
      "https://media.licdn.com/dms/image/C5603AQGWIWC_OIILLA/profile-displayphoto-shrink_200_200/0/1627977982489?e=2147483647&v=beta&t=A7YuWB8vKuoUAm9R1wUOr88D4JDBdMJhIUuuujNAUI4",
    email: "hussein.ali@example.com",
  },
];
export { columns, users, statusOptions };
