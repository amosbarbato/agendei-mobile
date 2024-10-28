export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(date)
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(price)
}