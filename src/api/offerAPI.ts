import { mockOffers } from "../mocks/offer.mock";
import type { Offer } from "../domain/offer/offer.entity";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchAllOffers(): Promise<Offer[]> {
  await delay(500);
  return [...mockOffers];
}

export async function cancelOffer(id: string): Promise<boolean> {
  await delay(500);
  return true;
}
