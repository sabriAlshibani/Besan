interface TripDetails {
  name: string;
  description: string;
  details: { image: string; description: string }[]; 
  image: string;
  link: string;
}

export const heroData: Record<string, TripDetails> = {
  "saudi-arabia": {
    name: "السعودية",
    description: "اكتشف الجمال والتاريخ في المملكة العربية السعودية.",
    details: [
      {
        image: "/images/country-1.jpeg",
        description: "مدائن صالح، الموقع الأثري الشهير في العلا.",
      },
      {
        image: "/images/country-2.jpeg",
        description: "جدة التاريخية، منطقة البلد المليئة بالثقافة والتاريخ.",
      },
      {
        image: "/images/country-3.jpeg",
        description: "تجربة فريدة في صحراء الربع الخالي الرائعة.",
      },
    ],
    image: "/images/country-7.jpg",
    link: "/bookings/saudi-arabia",
  },

  "uae": {
    name: "الإمارات",
    description: "استمتع بفخامة دبي وأبوظبي مع تجارب سياحية فريدة.",
    details: [
      {
        image: "/images/country-4.jpeg",
        description: "برج خليفة، أطول برج في العالم وإطلالة مذهلة على دبي.",
      },
      {
        image: "/images/country-5.jpeg",
        description: "جزر النخيل، معمار مدهش وأجواء فاخرة.",
      },
      {
        image: "/images/country-2.jpeg",
        description: "تجربة سفاري رائعة في صحراء دبي.",
      },
    ],
    image: "/images/country-2.jpeg",
    link: "/bookings/uae",
  },

  "egypt": {
    name: "مصر",
    description: "رحلة عبر الزمن لاكتشاف الأهرامات وأجمل المعابد الفرعونية.",
    details: [
      {
        image: "/images/country-1.jpeg",
        description: "أهرامات الجيزة وأبو الهول، أعظم عجائب العالم القديم.",
      },
      {
        image: "/images/country-4.jpeg",
        description: "رحلة نيلية ساحرة بين الأقصر وأسوان.",
      },
      {
        image: "/images/country-6.jpeg",
        description: "أسواق القاهرة القديمة وجمال شارع المعز التاريخي.",
      },
    ],
    image: "/images/country-9.jpeg",
    link: "/bookings/egypt",
  },

  "turkey": {
    name: "تركيا",
    description: "سحر الطبيعة والتاريخ في قلب إسطنبول وكابادوكيا.",
    details: [
      {
        image: "/images/country-6.jpeg",
        description: "جامع آيا صوفيا الشهير في إسطنبول.",
      },
      {
        image: "/images/country-2.jpeg",
        description: "تجربة منطاد رائعة فوق كابادوكيا.",
      },
      {
        image: "/images/country-5.jpeg",
        description: "البازار الكبير، أحد أقدم الأسواق المغطاة في العالم.",
      },
    ],
    image: "/images/country-4.jpeg",
    link: "/bookings/turkey",
  },
};
