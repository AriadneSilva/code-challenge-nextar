export type Offer = {
  id: string;
  name: string;
  price: number;
  discount: number;
  qnt: number;
  version: number;
  startDate: Date;
  endDate: Date;
  updatedAt: string;
  status: "ativa" | "agendada" | "expirada";
};
