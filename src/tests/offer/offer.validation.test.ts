import { describe, it, expect } from "vitest";
import {
  validateStock,
  validateDiscountPercentage,
  validateDates,
} from "../../domain/offer/offer.validation";

describe("Offer validations", () => {
  it("função para validar se tem estoque válido", () => {
    expect(() => validateStock(10)).not.toThrow();
  });
  it("função para validar estoque negativo", () => {
    expect(() => validateStock(-1)).toThrow();
  });
  it("função para validar estoque vazio", () => {
    expect(() => validateStock(0)).toThrow();
  });
  it("função para validar se o percentual de desconto é valido", () => {
    expect(() => validateDiscountPercentage(20)).not.toThrow();
  });
  it("função para validar se o percentual de desconto é maior que 100", () => {
    expect(() => validateDiscountPercentage(150)).toThrow();
  });
  it("função para validar datas corretas", () => {
    const startDate = new Date("2026-02-13");
    const endDate = new Date("2026-02-15");
    expect(() => validateDates(startDate, endDate)).not.toThrow();
  });
});
