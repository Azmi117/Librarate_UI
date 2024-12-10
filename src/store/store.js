import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || null, // Ambil token dari localStorage saat inisialisasi
  isLoggedIn: !!localStorage.getItem("token"), // Status login berdasarkan token di localStorage
  setLogin: ({ token }) => {
    localStorage.setItem("token", token); // Simpan token ke localStorage
    set({ token, isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    set({ token: null, isLoggedIn: false });
  },
}));

export default useAuthStore;