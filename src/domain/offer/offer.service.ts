export function calculateDiscount(price: number, discountPercentage: number) {
  return price - price * (discountPercentage / 100);
}

export function checkVersion(currentVersion: number, incomingVersion: number) {
  if (incomingVersion !== currentVersion) {
    throw new Error("Conflito na versão da oferta");
  }
}

export function incrementVersion(version: number) {
  return version + 1;
}
