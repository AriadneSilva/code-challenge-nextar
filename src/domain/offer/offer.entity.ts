export type OfferStatus = "active" | "scheduled" | "expired";

export type Offer = {
  id: string;
  title: string;
  price: number;
  urlImage: string;
  discountPercentage: number;
  stock: number;
  version: number;
  startDate: Date;
  endDate: Date;
  updatedAt: Date;
  status: OfferStatus;
};
