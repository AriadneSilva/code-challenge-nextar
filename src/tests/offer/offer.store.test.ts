import type { OfferStatus } from "./../../domain/offer/offer.entity";
import { describe, it, expect, beforeEach } from "vitest";

import { useOfferStore } from "../../store/offer.store";
import { mockOffers } from "../../mocks/offer.mock";

describe("Integração do Offer Store", () => {
  beforeEach(() => {
    useOfferStore.setState({
      listOffers: [],
      selectedOffer: null,
      isLoading: false,
      error: null,
    });
  });

  it("Criando uma nova oferta", () => {
    const { newOffer } = useOfferStore.getState();
    newOffer(mockOffers[0]);

    const state = useOfferStore.getState();
    expect(state.listOffers.length).toBe(1);
  });

  it("Selecionando uma oferta", () => {
    const { selectOffer } = useOfferStore.getState();
    selectOffer(mockOffers[1]);

    const state = useOfferStore.getState();
    expect(state.selectedOffer?.title).toBe("Cenoura");
  });

  it("Atualizando uma oferta ", () => {
    const { newOffer, updateOffer } = useOfferStore.getState();

    newOffer(mockOffers[0]);

    const updatedOffer = {
      ...mockOffers[0],
      startDate: new Date("2026-03-18"),
      endDate: new Date("2026-03-20"),
      status: "active" as OfferStatus,
      updatedAt: new Date("2026-03-11"),
    };

    updateOffer(updatedOffer);

    const state = useOfferStore.getState();

    expect(state.listOffers[0].startDate).toStrictEqual(new Date("2026-03-18"));
    expect(state.listOffers[0].endDate).toStrictEqual(new Date("2026-03-20"));
    expect(state.listOffers[0].status).toStrictEqual("active");
    expect(state.listOffers[0].updatedAt).toStrictEqual(new Date("2026-03-11"));
  });
  it("Removendo uma oferta ", () => {
    const { newOffer, deleteOffer } = useOfferStore.getState();

    newOffer(mockOffers[0]);

    deleteOffer(mockOffers[0].id);

    const state = useOfferStore.getState();

    expect(state.listOffers.length).toBe(0);
  });
});
