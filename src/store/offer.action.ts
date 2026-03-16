import type { Offer } from "../domain/offer/offer.entity";

export type OfferAction = {
  newOffer: (addedOffer: Offer) => void;

  selectOffer: (selectedOffer: Offer) => void;

  // setOffer: (setedOffer: Offer[] | null) => void;

  updateOffer: (updatedOffer: Offer) => void;

  deleteOffer: (idOffer: string) => void;
};
