import { useOfferStore } from "../store/offer.store";
import { useEffect } from "react";

export function useOffer() {
  const listOffers = useOfferStore((state) => state.listOffers);
  const fetchAllOffers = useOfferStore((state) => state.fetchAllOffers);
  const cancelOffer = useOfferStore((state) => state.cancelOffer);

  useEffect(() => {
    fetchAllOffers();
  }, [fetchAllOffers]);

  return {
    listOffers,
    cancelOffer,
  };
}
