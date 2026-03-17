import { create } from "zustand";
import type { OfferState } from "./offer.type";
import type { OfferAction } from "./offer.action";
import { fetchAllOffers, cancelOffer } from "../api/offerAPI";
import { checkVersion, incrementVersion } from "../domain/offer/offer.service";

type OfferStore = OfferState & OfferAction;

export const useOfferStore = create<OfferStore>((set, get) => ({
  listOffers: [],
  selectedOffer: null,
  isLoading: false,
  error: null,
  filter: "All",
  searchFilter: "",
  setFilter: (filter) => set({ filter }),

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
    addedOffer.id = get().listOffers.length.toString();
    addedOffer.version = 1;
    addedOffer.updatedAt = new Date();

    set((state) => ({ listOffers: [...state.listOffers, addedOffer] }));
  },

  selectOffer(selectedOffer) {
    set(() => ({ selectedOffer: selectedOffer }));
  },

  updateOffer(updatedOffer) {
    const lastOffer = get().listOffers.filter(
      (offer) => offer.id === updatedOffer.id,
    );

    try {
      checkVersion(lastOffer[0].version, updatedOffer.version);

      updatedOffer.version = incrementVersion(updatedOffer.version);

      set((state) => ({
        listOffers: state.listOffers.map((offer) =>
          offer.id === updatedOffer.id ? updatedOffer : offer,
        ),
      }));
    } catch (e) {
      console.log("Peguei o erro", e);
    }
  },

  deleteOffer(idOffer) {
    set((state) => ({
      listOffers: state.listOffers.filter((offer) => offer.id != idOffer),
    }));
  },
}));
