import Facebook from "../../assets/icons/facebook_profile.png";
import Instagram from "../../assets/icons/instagram_profile.png";
import Whatsapp from "../../assets/icons/whatsapp_profile.png";

import work1 from "../../assets/images/gallery/tattoo_gallery_10.jpg";
import work2 from "../../assets/images/gallery/tattoo_gallery_10.jpg";
import work3 from "../../assets/images/gallery/tattoo_gallery_10.jpg";
import work4 from "../../assets/images/gallery/tattoo_gallery_10.jpg";
import work5 from "../../assets/images/gallery/tattoo_gallery_10.jpg";
import work6 from "../../assets/images/gallery/tattoo_gallery_10.jpg";

export const artistsData = [
  {
    id: 1,
    slug: "sara-morgan",
    name: "Sara Morgan",
    role: "Geometría Sagrada",
    profileRole: "Tattoo Artist · Artista del tatuaje",
    link: "/artistas/sara-morgan",

    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",

    specialty: "Geometría sagrada",
    styles: ["Línea fina", "Boceto", "Acuarela"],
    availability: "Con cita previa",

    socials: {
      facebook: { url: "#", icon: Facebook },
      instagram: { url: "#", icon: Instagram },
      whatsapp: { url: "#", icon: Whatsapp },
    },

    intro:
      "El arte siempre ha sido parte de su esencia. Para Sara, cada forma, cada línea y cada composición es una oportunidad para contar una historia.",

    bio: [
      "Su inspiración nace de la geometría sagrada, la música y la conexión entre el arte y la ciencia. Admiradora de Leonardo da Vinci, encuentra en sus estudios una filosofía que lleva a su trabajo: la belleza está en los detalles y el equilibrio se encuentra en cada forma.",

      "Su recorrido por diferentes disciplinas artísticas ha enriquecido su sensibilidad y su manera de crear. Hoy, esa exploración se transforma en tatuajes que combinan técnica, creatividad y expresión personal.",
    ],

    quote: "Convertir la piel en un espacio donde el arte cobra vida.",

    gallery: [
      {
        id: 1,
        image: work1,
        style: "Geometría",
        alt: "Tatuaje estilo geometría de Sara Morgan",
      },
      {
        id: 2,
        image: work2,
        style: "Línea fina",
        alt: "Tatuaje estilo línea fina de Sara Morgan",
      },
      {
        id: 3,
        image: work3,
        style: "Boceto",
        alt: "Tatuaje estilo boceto de Sara Morgan",
      },
      {
        id: 4,
        image: work4,
        style: "Boceto",
        alt: "Tatuaje estilo boceto de Sara Morgan",
      },
      {
        id: 5,
        image: work5,
        style: "Boceto",
        alt: "Tatuaje estilo boceto de Sara Morgan",
      },
      {
        id: 6,
        image: work6,
        style: "Boceto",
        alt: "Tatuaje estilo boceto de Sara Morgan",
      },
    ],
  },

  {
    id: 2,
    slug: "edwin-wood",
    name: "Edwin Wood",
    role: "Tattoo Master",
    profileRole: "Tattoo Artist · Artista del tatuaje",
    link: "/artistas/edwin-wood",

    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",

    specialty: "Realismo",
    styles: ["Blanco y negro", "Tradicional"],
    availability: "Con cita previa",

    socials: {
      facebook: { url: "#", icon: Facebook },
      instagram: { url: "#", icon: Instagram },
      whatsapp: { url: "#", icon: Whatsapp },
    },

    intro:
      "El arte siempre ha sido parte de su esencia. Para Edwin, cada forma, cada línea y cada composición es una oportunidad para contar una historia.",

    bio: [
      "Su inspiración nace de la exploración artística, la creatividad y la búsqueda de nuevas formas de expresión.",

      "Su recorrido por el mundo del tatuaje le ha permitido desarrollar una técnica propia que combina precisión, creatividad y expresión personal.",
    ],

    quote:
      "Transformar cada idea en una obra de arte que refleje la identidad de cada persona.",

    gallery: [
      {
        id: 1,
        image: work1,
        style: "Realismo",
        alt: "Tatuaje estilo realismo de Edwin Wood",
      },
      {
        id: 2,
        image: work2,
        style: "Boceto",
        alt: "Tatuaje estilo boceto de Edwin Wood",
      },
      {
        id: 3,
        image: work3,
        style: "Tradicional",
        alt: "Tatuaje estilo tradicional de Edwin Wood",
      },
    ],
  },

  {
    id: 3,
    slug: "susy-smith",
    name: "Susy Smith",
    role: "Tattoo Master",
    profileRole: "Tattoo Artist · Artista del tatuaje",
    link: "/artistas/susy-smith",

    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",

    specialty: "Acuarela",
    styles: ["Color", "Línea fina"],
    availability: "Con cita previa",

    socials: {
      facebook: { url: "#", icon: Facebook },
      instagram: { url: "#", icon: Instagram },
      whatsapp: { url: "#", icon: Whatsapp },
    },

    intro:
      "El arte siempre ha sido parte de su esencia. Para Susy, cada forma, cada línea y cada composición es una oportunidad para contar una historia.",

    bio: [
      "Su inspiración nace de la creatividad, la exploración visual y la conexión entre el arte y la expresión personal.",

      "Su experiencia artística le permite desarrollar composiciones únicas que combinan sensibilidad, técnica y creatividad.",
    ],

    quote:
      "Convertir cada diseño en una expresión artística que acompañe tu historia.",

    gallery: [
      {
        id: 1,
        image: work1,
        style: "Acuarela",
        alt: "Tatuaje estilo acuarela de Susy Smith",
      },
      {
        id: 2,
        image: work2,
        style: "Línea fina",
        alt: "Tatuaje estilo línea fina de Susy Smith",
      },
      {
        id: 3,
        image: work3,
        style: "Tradicional",
        alt: "Tatuaje estilo tradicional de Susy Smith",
      },
    ],
  },
];