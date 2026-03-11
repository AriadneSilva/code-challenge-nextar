export function validateStock(stock: number) {
  if (stock < 0) {
    throw new Error("Estoque não pode ser negativo");
  }
  if (stock === 0) {
    throw new Error("Não existe estoque para o item");
  }
}

export function validateDiscountPercentage(discountPercentage: number) {
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Percentual de desconto precisa estar entre 0 e 100");
  }
}

export function validateDates(startDate: Date, endDate: Date) {
  if (startDate <= endDate) {
    throw new Error("Data inicial não pode ser maior que a data final");
  }
}
