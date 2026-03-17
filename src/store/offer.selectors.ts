import { useOfferStore } from "./offer.store";

export const getListOffers = (
  state: ReturnType<typeof useOfferStore.getState>,
) => state.listOffers;

export const getSeletedOffer = (
  state: ReturnType<typeof useOfferStore.getState>,
) => state.selectedOffer;

export const getActiveOffers = (state: ReturnType<typeof useOfferStore.getState>) =>
  state.listOffers.map((offer) => offer.status === "active");

export const getScheduledOffers = (
  state: ReturnType<typeof useOfferStore.getState>,
) => state.listOffers.filter((offer) => offer.status === "scheduled");

export const getExpireddOffers = (
  state: ReturnType<typeof useOfferStore.getState>,
) => state.listOffers.filter((offer) => offer.status === "expired");
