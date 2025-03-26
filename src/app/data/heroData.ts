interface TripDetails {
    name: string;
    description: string;
    details: string;
    image: string;
    link: string;
  }
export const heroData: Record<string, TripDetails> = {
    "saudi-arabia": {
      name: "السعودية",
      description: "اكتشف الجمال والتاريخ في المملكة العربية السعودية.",
      details:
        "استمتع بزيارة مدائن صالح، جدة التاريخية، والرياض الحديثة. تجربة صحراوية رائعة في الربع الخالي، مع أجواء ساحرة وثقافة غنية.",
      image: "/images/country-1.jpeg",
      link: "/bookings/saudi-arabia",
    },
    "uae": {
      name: "الإمارات",
      description: "استمتع بفخامة دبي وأبوظبي مع تجارب سياحية فريدة.",
      details:
        "اكتشف أطول برج في العالم، جزر النخيل، الأسواق الفاخرة، وأجمل المعالم السياحية في الإمارات. مغامرات رائعة بين الصحاري وناطحات السحاب.",
      image: "/images/country-2.jpeg",
      link: "/bookings/uae",
    },
    "egypt": {
      name: "مصر",
      description: "رحلة عبر الزمن لاكتشاف الأهرامات وأجمل المعابد الفرعونية.",
      details:
        "من أهرامات الجيزة وأبو الهول إلى نهر النيل وأسواق القاهرة القديمة، استمتع بمغامرة تاريخية لا مثيل لها في مصر.",
      image: "/images/country-3.jpeg",
      link: "/bookings/egypt",
    },
    "turkey": {
      name: "تركيا",
      description: "سحر الطبيعة والتاريخ في قلب إسطنبول وكابادوكيا.",
      details:
        "قم بزيارة آيا صوفيا، البازار الكبير، واستمتع برحلة بالمنطاد فوق كابادوكيا. تجربة رائعة تجمع بين الشرق والغرب.",
      image: "/images/country-4.jpeg",
      link: "/bookings/turkey",
    },
  };
  