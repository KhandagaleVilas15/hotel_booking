import { create } from 'zustand';
import { addDays, formatISO } from 'date-fns';

const today = new Date();

export const useSearchStore = create((set) => ({
  location: 'Mumbai, India',
  checkIn: formatISO(today, { representation: 'date' }),
  checkOut: formatISO(addDays(today, 2), { representation: 'date' }),
  travellers: {
    adults: 2,
    children: 0,
    rooms: 1,
  },
  updateField: (field, value) => set(() => ({ [field]: value })),
  updateTravellers: (updates) =>
    set((state) => ({ travellers: { ...state.travellers, ...updates } })),
  hydrateFromHero: (hero) =>
    hero
      ? set(() => ({
          location: hero.defaultLocation ?? 'Mumbai, India',
          checkIn:
            hero.defaultDates?.checkIn?.slice(0, 10) ??
            formatISO(today, { representation: 'date' }),
          checkOut:
            hero.defaultDates?.checkOut?.slice(0, 10) ??
            formatISO(addDays(today, 2), { representation: 'date' }),
          travellers: hero.defaultTravellers ?? { adults: 2, children: 0, rooms: 1 },
        }))
      : null,
}));

