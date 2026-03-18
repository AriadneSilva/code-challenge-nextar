import type { Offer } from "../domain/offer/offer.entity";
import type { ActionResult } from "../types/actionResult";

export type OfferAction = {
  newOffer: (addedOffer: Offer) => Promise<ActionResult>;

  selectOffer: (selectedOffer: Offer) => void;

  // setOffer: (setedOffer: Offer[] | null) => void;

  updateOffer: (updatedOffer: Offer) => Promise<ActionResult>;

  deleteOffer: (idOffer: string) => Promise<ActionResult>;
};
