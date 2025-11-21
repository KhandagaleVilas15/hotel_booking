import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
});

export const fetchHero = async () => {
  const { data } = await api.get('/hero');
  return data;
};

export const fetchDestinations = async (category = 'beach') => {
  const params = category ? { params: { category } } : undefined;
  const { data } = await api.get('/destinations', params);
  return data;
};

export const fetchDeals = async () => {
  const { data } = await api.get('/deals/last-minute');
  return data;
};

export const fetchEventSlides = async () => {
  const { data } = await api.get('/events');
  return data;
};

export const postSearch = async (payload) => {
  const { data } = await api.post('/search', payload);
  return data;
};

export default api;

