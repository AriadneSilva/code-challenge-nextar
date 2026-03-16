import { useOfferStore } from "../store/offer.store";
import { useEffect, useState } from "react";
import type { Offer } from "../domain/offer/offer.entity";

export function useOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();
  const listOffers = useOfferStore((state) => state.listOffers);
  const fetchAllOffers = useOfferStore((state) => state.fetchAllOffers);
  const cancelOffer = useOfferStore((state) => state.cancelOffer);
  const createOffer = useOfferStore((state) => state.newOffer);

  useEffect(() => {
    fetchAllOffers();
  }, [fetchAllOffers]);

  return {
    listOffers,
    cancelOffer,
    createOffer,
    isModalOpen,
    setIsModalOpen,
    selectedOffer,
    setSelectedOffer,
  };
}
