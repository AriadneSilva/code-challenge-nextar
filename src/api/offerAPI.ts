import { mockOffers } from "../mocks/offer.mock";
import type { Offer } from "../domain/offer/offer.entity";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchAllOffers(): Promise<Offer[]> {
  await delay(500);
  return [...mockOffers];
}

export async function createOfferAPI(offer: Offer): Promise<boolean> {
  await delay(500);
  return true;
}
export async function updateOfferAPI(offer: Offer): Promise<boolean> {
  await delay(500);
  return true;
}
export async function deleteOfferAPI(id: string): Promise<boolean> {
  await delay(500);
  return true;
}
export async function cancelOfferAPI(id: string): Promise<boolean> {
  await delay(500);
  return true;
}


