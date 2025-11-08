export const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
} as const;
// as const -> Cada key del objeto STATUS tiene un dato idéntico al valor que almacena

export type StatusType = (typeof STATUS)[keyof typeof STATUS];
// StatusType tiene que ser una de las key del objeto as const STATUS

// export const STATUS = {
//   IDLE: "idle",
//   PENDING: "pending",
//   FULFILLED: "fulfilled",
//   REJECTED: "rejected",
// }; -> El objeto STATUS tiene datos de tipo string en todas sus keys
