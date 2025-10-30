// Simular la creación de un JWT "token"
export const createToken = (user) => {
  try {
    const userString = JSON.stringify(user);
    return btoa(userString); // Crear un string Base64
  } catch (error) {
    console.error("Error creating token", error);
    return null;
  }
};

// Simular la decodificación de un JWT "token"
export const decodeToken = (token) => {
  try {
    const objJson = atob(token);
    return JSON.parse(objJson);
  } catch (error) {
    console.error("Error decoding token", error);
    return null;
  }
};
