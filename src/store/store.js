import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: null, // Untuk menyimpan token
  isLoggedIn: false, // Status login
  setLogin: (token) => set({ token, isLoggedIn: true }), // Fungsi untuk login
  logout: () => set({ token: null, isLoggedIn: false }), // Fungsi untuk logout
}));

export default useAuthStore;
