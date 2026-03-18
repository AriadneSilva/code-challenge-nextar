import { create } from "zustand";
import type { OfferState } from "./offer.type";
import type { OfferAction } from "./offer.action";
import {
  fetchAllOffers,
  cancelOfferAPI,
  deleteOfferAPI,
  createOfferAPI,
  updateOfferAPI,
} from "../api/offerAPI";
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
        offer.id === id
          ? {
              ...offer,
              status: "expired",
              updatedAt: new Date(),
              endDate: new Date(),
            }
          : offer,
      ),
    });

    try {
      await cancelOfferAPI(id);
      return {
        success: true,
        message: "Oferta cancelada com sucesso",
      };
    } catch {
      set({ listOffers: actualOffers });
      return {
        success: false,
        message: "Erro ao cancelar oferta",
      };
    }
  },

  newOffer: async (addedOffer) => {
    const actualOffers = get().listOffers;

    addedOffer.id = get().listOffers.length.toString();
    addedOffer.version = 1;
    addedOffer.updatedAt = new Date();

    set((state) => ({ listOffers: [...state.listOffers, addedOffer] }));

    try {
      await createOfferAPI(addedOffer);
      return {
        success: true,
        message: "Oferta criada com sucesso",
      };
    } catch {
      set({ listOffers: actualOffers });
      return {
        success: false,
        message: "Erro ao criar oferta",
      };
    }
  },

  selectOffer(selectedOffer) {
    set(() => ({ selectedOffer: selectedOffer }));
  },

  updateOffer: async (updatedOffer) => {
    const actualOffers = get().listOffers;

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

      await updateOfferAPI(updatedOffer);

      return {
        success: true,
        message: "Oferta atualizada com sucesso",
      };
    } catch (e) {
      console.log("Erro", e);
      set({ listOffers: actualOffers });
      return {
        success: false,
        message: "Erro ao atualizar oferta",
      };
    }
  },

  deleteOffer: async (idOffer) => {
    const actualOffers = get().listOffers;
    set((state) => ({
      listOffers: state.listOffers.filter((offer) => offer.id != idOffer),
    }));
    try {
      await deleteOfferAPI(idOffer);
      return {
        success: true,
        message: "Oferta deletada com sucesso",
      };
    } catch {
      set({ listOffers: actualOffers });
      return {
        success: false,
        message: "Erro ao deletar oferta",
      };
    }
  },
}));
