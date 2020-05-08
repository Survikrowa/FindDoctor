const API_URL = "http://localhost:3000";

export const API = {
  fetchDoctors: async () => {
    try {
      const response = await fetch(`${API_URL}/doctors`);
      if (!response.ok) throw new Error("Something went wrong!");
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
};
