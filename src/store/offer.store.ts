import { create } from "zustand";
import type { OfferState } from "./offer.type";
import type { OfferAction } from "./offer.action";

type OfferStore = OfferState & OfferAction;

export const useOfferStore = create<OfferStore>((set) => ({
  listOffers: [],
  selectedOffer: null,
  isLoading: false,
  error: null,

  newOffer(addedOffer) {
    set((state) => ({ listOffers: [...state.listOffers, addedOffer] }));
  },

  selectOffer(selectedOffer) {
    set(() => ({ selectedOffer: selectedOffer }));
  },

  // setOffer(setedOffer) {
  //   set(() => ({ setedOffer: listOffers }));
  // },

  updateOffer(updatedOffer) {
    set((state) => ({
      listOffers: state.listOffers.map((offer) =>
        offer.id === updatedOffer.id ? updatedOffer : offer,
      ),
    }));
  },

  deleteOffer(idOffer) {
    set((state) => ({
      listOffers: state.listOffers.filter((offer) => offer.id != idOffer),
    }));
  },
}));
