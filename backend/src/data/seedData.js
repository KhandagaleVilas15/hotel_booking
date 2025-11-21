export const heroSeed = [
  {
    headline: 'Your next trip starts here',
    subheading: 'Book stays picked for every travel style.',
    defaultLocation: 'Mumbai, India',
    defaultDates: {
      checkIn: new Date('2025-12-05'),
      checkOut: new Date('2025-12-07'),
    },
    defaultTravellers: {
      rooms: 1,
      adults: 2,
      children: 0,
    },
  },
];

export const destinationSeed = [
  {
    name: 'Krabi',
    location: 'Krabi Province, Thailand',
    category: 'beach',
    averagePrice: 4574,
    imageUrl:
      'https://images.unsplash.com/photo-1505739775417-85f64b995b91?auto=format&fit=crop&w=1200&q=60',
    tags: ['Beachfront', 'Island hopping'],
  },
  {
    name: 'Phuket',
    location: 'Phuket Province, Thailand',
    category: 'beach',
    averagePrice: 3787,
    imageUrl:
      'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=1200&q=60',
    tags: ['Nightlife', 'Markets'],
  },
  {
    name: 'Mumbai',
    location: 'Maharashtra, India',
    category: 'culture',
    averagePrice: 6378,
    imageUrl:
      'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac5?auto=format&fit=crop&w=1200&q=60',
    tags: ['Gateway of India', 'Street food'],
  },
  {
    name: 'Patong',
    location: 'Phuket Province, Thailand',
    category: 'family',
    averagePrice: 9818,
    imageUrl:
      'https://images.unsplash.com/photo-1504610926078-a1611febcad3?auto=format&fit=crop&w=1200&q=60',
    tags: ['Shopping', 'Night market'],
  },
  {
    name: 'Gulmarg',
    location: 'Kashmir, India',
    category: 'ski',
    averagePrice: 8120,
    imageUrl:
      'https://images.unsplash.com/photo-1504280317859-9da32bdf9f09?auto=format&fit=crop&w=1200&q=60',
    tags: ['Ski', 'Himalayas'],
  },
  {
    name: 'Rishikesh',
    location: 'Uttarakhand, India',
    category: 'wellness',
    averagePrice: 4320,
    imageUrl:
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=60',
    tags: ['Yoga', 'River retreat'],
  },
];

export const dealSeed = [
  {
    title: 'VIP Access Phuket Escape',
    location: 'Patong, Thailand',
    pricePerNight: 6899,
    imageUrl:
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=60',
    ],
    startDate: new Date('2025-11-28'),
    endDate: new Date('2025-11-30'),
    perks: ['Free breakfast', 'Late checkout'],
    badge: 'Last minute',
  },
  {
    title: 'Mumbai Heritage Stay',
    location: 'Colaba, India',
    pricePerNight: 5590,
    imageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1496104679561-38d6cdccf230?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=60',
    ],
    startDate: new Date('2025-11-28'),
    endDate: new Date('2025-12-02'),
    perks: ['Airport pickup', 'Breakfast'],
    badge: 'Member deal',
  },
  {
    title: 'Krabi Beach Villas',
    location: 'Ao Nang, Thailand',
    pricePerNight: 6025,
    imageUrl:
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=60',
    ],
    startDate: new Date('2025-11-29'),
    endDate: new Date('2025-12-03'),
    perks: ['Spa credit', 'Welcome drinks'],
  },
];

export const eventSlidesSeed = [
  {
    title: 'Host Your Special Event',
    headline: 'Corporate Event',
    description:
      'Elevate your corporate events with eco-luxury venues, top-notch facilities, and seamless planning for success.',
    ctaLabel: 'Celebrate with us',
    buttonLabel: 'Book now',
    imageUrl:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=60',
    order: 1,
  },
  {
    title: 'Host Your Special Event',
    headline: 'Wedding Event',
    description:
      'Make your big day magical with exquisite menus, heartfelt service, and sustainable celebrations.',
    ctaLabel: 'Celebrate with us',
    buttonLabel: 'Book now',
    imageUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=60',
    order: 2,
  },
  {
    title: 'Host Your Special Event',
    headline: 'Birthday & Social',
    description:
      'From intimate soirées to milestone parties, our team designs unforgettable memories.',
    ctaLabel: 'Celebrate with us',
    buttonLabel: 'Plan a party',
    imageUrl:
      'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=60',
    order: 3,
  },
];

