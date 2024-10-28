export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0'); // Obtém o dia e garante que tenha 2 dígitos
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtém o mês (0-11) e garante 2 dígitos
  const year = date.getFullYear(); // Obtém o ano
  return `${day}/${month}/${year}`; // Retorna a data no formato DD/MM/YYYY
};