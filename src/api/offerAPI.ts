import { mockOffers } from "../mocks/offer.mock";
import type { Offer } from "../domain/offer/offer.entity";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

//Simulação para chamadas de API

export async function fetchAllOffers(): Promise<Offer[]> {
  await delay(500);
  return [...mockOffers];
}

export async function createOfferAPI(_offer: Offer): Promise<boolean> {  
  await delay(500);
  return true;
}
export async function updateOfferAPI(_offer: Offer): Promise<boolean> {
  await delay(500);
  return true;
}
export async function deleteOfferAPI(_id: string): Promise<boolean> {
  await delay(500);
  return true;
}
export async function cancelOfferAPI(_id: string): Promise<boolean> {
  await delay(500);
  return true;
}


