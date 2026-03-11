export type Offer = {
  id: string;
  title: string;
  price: number;
  discount: number;
  stock: number;
  version: number;
  startDate: Date;
  endDate: Date;
  updatedAt: Date;
  status: "active" | "scheduled" | "expired";
};
