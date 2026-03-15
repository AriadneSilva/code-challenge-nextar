import type { Offer } from "../domain/offer/offer.entity";

export type OfferState = {
  listOffers: Offer[];
  selectedOffer: Offer | null;
  isLoading: boolean;
  error: string | null;

  fetchAllOffers: () => Promise<void>;
  cancelOffer: (id: string) => Promise<void>;
};
