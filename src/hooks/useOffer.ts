import { useOfferStore } from "../store/offer.store";
import { useEffect, useState } from "react";
import type { Offer } from "../domain/offer/offer.entity";

export function useOffer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>();
  const filter = useOfferStore((state) => state.filter);
  const setFilter = useOfferStore((state) => state.setFilter);

  const listOffers = useOfferStore((state) => state.listOffers);
  const fetchAllOffers = useOfferStore((state) => state.fetchAllOffers);
  const cancelOffer = useOfferStore((state) => state.cancelOffer);
  const createOffer = useOfferStore((state) => state.newOffer);
  const updateOffer = useOfferStore((state) => state.updateOffer);

  const metrics = {
    active: listOffers.filter((o) => o.status === "active").length,
    scheduled: listOffers.filter((o) => o.status === "scheduled").length,
    expired: listOffers.filter((o) => o.status === "expired").length,
  };

  const filteredOffers =
    filter === "All"
      ? listOffers
      : listOffers.filter((offer) => offer.status === filter);

  useEffect(() => {
    if (listOffers.length === 0) {
      fetchAllOffers();
    }
  }, [fetchAllOffers]);

  return {
    listOffers,
    cancelOffer,
    createOffer,
    isModalOpen,
    setIsModalOpen,
    selectedOffer,
    setSelectedOffer,
    updateOffer,
    filteredOffers,
    filter,
    setFilter,
    metrics,
  };
}
