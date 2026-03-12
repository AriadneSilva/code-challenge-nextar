import type { Offer } from "../domain/offer/offer.entity";

export type OfferState = {
  listOffers: Offer[];
  selectedOffer: Offer | null;
  isLoading: boolean;
  error: string | null;
};
