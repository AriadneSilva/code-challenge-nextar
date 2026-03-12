import { useOfferStore } from "../store/offer.store";
import {
  getListOffers,
  getSeletedOffer,
  getActiveOffers,
  getScheduledOffers,
  getExpireddOffers,
} from "../store/offer.selectors";

export function useOffer() {
  const listOffers = useOfferStore(getListOffers);

  const selectedOffer = useOfferStore(getSeletedOffer);
  const activeOffers = useOfferStore(getActiveOffers);
  const scheduledOffers = useOfferStore(getScheduledOffers);
  const expiredOffers = useOfferStore(getExpireddOffers);

  const createOffer = useOfferStore((state) => state.newOffer);
  const updateOffer = useOfferStore((state) => state.updateOffer);
  const removeOffer = useOfferStore((state) => state.deleteOffer);
  const selectOffer = useOfferStore((state) => state.selectOffer);

  return {
    listOffers,
    selectedOffer,
    activeOffers,
    scheduledOffers,
    expiredOffers,
    createOffer,
    updateOffer,
    removeOffer,
    selectOffer,
  };
}
