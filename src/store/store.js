import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  token: localStorage.getItem('token'),
  setToken: (token) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    set({ token });
  },
  validateToken: () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          // Token expired
          localStorage.removeItem('token');
          set({ token: null, isLoggedIn: false, user: null });
        } else {
          set({ isLoggedIn: true, user: decoded });
        }
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
        set({ token: null, isLoggedIn: false, user: null });
      }
    }
  },
  
  logout: () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    set({ token: null, isLoggedIn: false, user: null }); // Reset state store
  },
}));

export default useAuthStore;
