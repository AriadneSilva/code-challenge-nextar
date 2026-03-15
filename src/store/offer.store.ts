import { create } from "zustand";
import type { OfferState } from "./offer.type";
import type { OfferAction } from "./offer.action";
import { fetchAllOffers, cancelOffer } from "../api/offerApi";

type OfferStore = OfferState & OfferAction;

export const useOfferStore = create<OfferStore>((set, get) => ({
  listOffers: [],
  selectedOffer: null,
  isLoading: false,
  error: null,

  fetchAllOffers: async () => {
    set({ isLoading: true });
    const data = await fetchAllOffers();

    set({
      listOffers: data,
      isLoading: false,
    });
  },

  cancelOffer: async (id: string) => {
    const actualOffers = get().listOffers;

    set({
      listOffers: actualOffers.map((offer) =>
        offer.id === id ? { ...offer, status: "expired" } : offer,
      ),
    });

    try {
      await cancelOffer(id);
    } catch {
      set({ listOffers: actualOffers });
    }
  },

  newOffer(addedOffer) {
    set((state) => ({ listOffers: [...state.listOffers, addedOffer] }));
  },

  selectOffer(selectedOffer) {
    set(() => ({ selectedOffer: selectedOffer }));
  },

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
