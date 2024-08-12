export const getServicesData = async () => {
  const res = await fetch("http://localhost:3000/services/api/get-all");
  const data = await res.json();
  return data;
};

export const getServicesDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/services/api/${id}`);
  const data = await res.json();
  return data;
};
