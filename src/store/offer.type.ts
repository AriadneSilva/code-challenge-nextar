import type { Offer } from "../domain/offer/offer.entity";
import { ActionResult } from "../types/actionResult";

export type OfferState = {
  listOffers: Offer[];
  selectedOffer: Offer | null;
  isLoading: boolean;
  error: string | null;
  filter: string;
  searchFilter: string;
  setFilter: (filter: string) => void;

  fetchAllOffers: () => Promise<void>;
  cancelOffer: (idOffer: string) => Promise<ActionResult>;
};
