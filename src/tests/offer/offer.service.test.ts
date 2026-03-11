import { describe, it, expect } from "vitest";

import {
  calculateDiscount,
  checkVersion,
  incrementVersion,
} from "../../domain/offer/offer.service";

describe("Offer service", () => {
  it("função para calculo do desconto", () => {
    const finalPrice = calculateDiscount(100, 20);
    expect(finalPrice).toBe(80);
  });
  it("função para validação se as versões são diferentes", () => {
    expect(() => checkVersion(2, 1)).toThrow();
  });
  it("função para validação se as versões são iguais", () => {
    expect(() => checkVersion(2, 2)).not.toThrow();
  });
  it("função para incremento correto da versão", () => {
    const finalVersion = incrementVersion(1);
    expect(finalVersion).toBe(2);
  });
});
