// Simular la obtención de la respuesta del servidor
const serverResponse = (payload) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ ok: true, json: async () => payload });
    }, 2000)
  );
};

// Simular la ejecución de fetch
export const setCount = async (payload) => {
  try {
    const response = await serverResponse(payload);

    if (!response.ok) throw new Error("Error fetching data");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
