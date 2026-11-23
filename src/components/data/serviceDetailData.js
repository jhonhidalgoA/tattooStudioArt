import tattooHero from "../../assets/images/gallery/images (1).jpeg";
import tattooProcess from "../../assets/images/gallery/tattoo_gallery_23.jpg";
import tattooDetail from "../../assets/images/gallery/tattoo_gallery_25.jpg";

import piercingHero from "../../assets/images/piercing/piercing_02.jpg";
import piercingDetail  from "../../assets/images/piercing/piercing_05.webp";
 import piercingProcess from "../../assets/images/piercing/piercing_04.jpg";

export const serviceDetailData = {
  tattoos: {
    category: "Servicio especializado",
    title: "Tatuajes",
    hook: "Tu esencia, convertida en arte.",
    description:
      "Creamos tatuajes personalizados que transforman tus ideas en obras de arte sobre la piel, combinando creatividad, precisión y técnica para dar vida a diseños que reflejan tu identidad.",
    images: [
      tattooHero,
      tattooProcess,
      tattooDetail,
    ],
    cta: "Reservar cita",

    quickFacts: [
      { label: "Duración estimada", value: "1 a 4 horas por sesión" },
      { label: "Nivel de molestia", value: "Depende de la zona" },
      { label: "Cicatrización", value: "2 a 4 semanas" },
      { label: "Incluye", value: "Diseño previo + kit de higiene" },
    ],

    process: [
      {
        title: "Asesoría y valoración",
        description: "Revisión de la idea y de la zona del cuerpo.",
      },
      {
        title: "Propuesta",
        description: "Boceto personalizado.",
      },
      {
        title: "Sesión en estudio",
        description:
          "Ejecución con materiales 100% desechables y bioseguridad certificada.",
      },
      {
        title: "Seguimiento",
        description: "Revisión de cicatrización y retoque si aplica.",
      },
    ],

    care: {
      before: [
        "Hidrata la piel los días previos.",
        "Duerme bien y ve bien alimentado.",
        "Evita alcohol y anticoagulantes 24 h antes.",
        "No expongas la zona al sol.",
      ],
      after: [
        "Lavado suave con jabón neutro.",
        "Aplica la crema cicatrizante recomendada.",
        "Evita piscinas, mar y sol directo.",
        "No te rasques ni arranques las costras.",
      ],
    },

    faqs: [
      {
        label: "Cotizaciones y diseños",
        subtitle: "Resolvemos tus dudas.",
        questions: [
          {
            question: "¿Cuánto cuesta el diseño previo?",
            answer:
              "El valor depende de la complejidad, el tamaño y el nivel de detalle del diseño. Durante la asesoría te informaremos las condiciones y el costo correspondiente antes de comenzar.",
          },
          {
            question: "¿Qué necesito para cotizar un tatuaje?",
            answer:
              "Necesitamos conocer tu idea, el tamaño aproximado, la zona del cuerpo donde deseas realizarlo y algunas imágenes de referencia. Con esta información podremos evaluar tu proyecto y ofrecerte una cotización más precisa.",
          },
          {
            question: "¿Puedo llevar mi propio diseño?",
            answer:
              "¡Por supuesto! Puedes compartir tus diseños, bocetos o imágenes de referencia. Nuestro equipo los evaluará para determinar cómo adaptarlos a tu idea, respetando tu estilo y las características del tatuaje.",
          },
          {
            question: "¿Realizan diseños personalizados?",
            answer:
              "Sí. Creamos diseños personalizados a partir de tus ideas, referencias y preferencias artísticas. Cada propuesta se desarrolla teniendo en cuenta tus expectativas, el estilo elegido y la zona del cuerpo.",
          },
        ],
      },
      {
        label: "Reservas y sesiones",
        subtitle: "Organiza tu cita.",
        questions: [
          {
            question: "¿Cómo puedo reservar una cita?",
            answer:
              "Puedes contactarnos a través de WhatsApp o nuestros canales de atención. Cuéntanos qué tatuaje deseas realizarte y te orientaremos sobre el proceso, la disponibilidad y los pasos para confirmar tu reserva.",
          },
          {
            question: "¿Es necesario realizar un anticipo?",
            answer:
              "Las condiciones de reserva se informan durante el proceso de agendamiento. En caso de requerir un anticipo, te indicaremos el valor, los medios de pago y las condiciones correspondientes para confirmar tu cita.",
          },
          {
            question: "¿Puedo cambiar o cancelar mi cita?",
            answer:
              "Si necesitas modificar o cancelar tu cita, te pedimos comunicarte con nosotros con la mayor anticipación posible. Nuestro equipo te informará las condiciones aplicables según las políticas de reserva del estudio.",
          },
          {
            question: "¿Cuánto dura una sesión?",
            answer:
              "La duración depende del tamaño, la complejidad, el estilo y la ubicación del tatuaje. Algunos diseños pueden realizarse en una sola sesión, mientras que los proyectos más elaborados pueden requerir varias citas.",
          },
        ],
      },
      {
        label: "Experiencia y procedimiento",
        subtitle: "Todo sobre tu experiencia.",
        questions: [
          {
            question: "¿Duele hacerse un tatuaje?",
            answer:
              "La sensación varía según la sensibilidad de cada persona, la zona del cuerpo y la duración de la sesión. Nuestro equipo te acompañará durante el procedimiento para brindarte una experiencia cómoda y profesional.",
          },
          {
            question: "¿Qué zonas son más sensibles?",
            answer:
              "La sensibilidad depende de cada persona. Generalmente, las zonas cercanas a los huesos, con piel más fina o mayor concentración de terminaciones nerviosas pueden generar más molestias. Podemos orientarte según la ubicación que hayas elegido.",
          },
          {
            question: "¿Puedo tatuarme sobre otro tatuaje?",
            answer:
              "Sí, existen técnicas como el cover-up que permiten transformar o cubrir un tatuaje anterior. Sin embargo, es necesario evaluar el diseño existente, sus dimensiones, tonalidades y estado de la piel para determinar las posibilidades del nuevo proyecto.",
          },
          {
            question: "¿Puedo asistir acompañado?",
            answer:
              "Puedes consultarnos previamente sobre las condiciones de acompañamiento del estudio. Buscamos mantener un ambiente tranquilo, cómodo y adecuado para el desarrollo de cada sesión.",
          },
        ],
      },
    ],
  },
  piercing: {
    category: "Servicio especializado",
    title: "Piercing",
    hook: "Precisión, estética y bioseguridad en cada perforación.",
    description:
      "Realizamos perforaciones corporales con técnica aséptica, agujas esterilizadas de un solo uso y joyería hipoalergénica en titanio grado implante para garantizar una cicatrización segura y estética.",
    images: [piercingHero, piercingProcess, piercingDetail],
    cta: "Reservar cita",

    quickFacts: [
      { label: "Duración estimada", value: "20 a 40 minutos" },
      { label: "Nivel de molestia", value: "Rápido y tolerado" },
      { label: "Cicatrización", value: "6 a 12 semanas según zona" },
      { label: "Incluye", value: "Joyería en titanio + guía de cuidado" },
    ],

    process: [
      {
        title: "Valoración anatómica",
        description:
          "Evaluamos la zona a perforar y elegimos la joyería ideal según tu anatomía.",
      },
      {
        title: "Marcación y esterilización",
        description:
          "Definimos el punto exacto con simetría y preparamos material 100% estéril.",
      },
      {
        title: "Perforación profesional",
        description:
          "Procedimiento rápido y preciso con aguja americana desechable.",
      },
      {
        title: "Control y cambio de pieza",
        description:
          "Seguimiento de cicatrización y ajuste a joyería más corta cuando desinflame.",
      },
    ],

    care: {
      before: [
        "Asiste bien alimentado e hidratado.",
        "Evita alcohol o aspirinas 24 h antes.",
        "Llega con la zona limpia y sin cremas.",
        "Trae tu documento de identidad.",
      ],
      after: [
        "Limpia dos veces al día con suero fisiológico estéril.",
        "No gires, aprietes ni retires la joya durante la cicatrización.",
        "Evita piscinas, saunas, mar y maquillaje sobre la zona.",
        "No duermas directamente sobre la perforación reciente.",
      ],
    },

    faqs: [
      {
        label: "Joyería y materiales",
        subtitle: "Calidad biocompatible.",
        questions: [
          {
            question: "¿Qué material usan para la primera perforación?",
            answer:
              "Utilizamos exclusivamente titanio grado implante ASTM F-136 o acero quirúrgico certificado, libres de níquel para evitar alergias e infecciones.",
          },
          {
            question: "¿Puedo llevar mi propia joya?",
            answer:
              "Por protocolos de bioseguridad y control de esterilización en autoclave, la perforación inicial se realiza únicamente con joyería nueva del estudio.",
          },
        ],
      },
      {
        label: "Cuidados y tiempos",
        subtitle: "Recuperación saludable.",
        questions: [
          {
            question: "¿Cuándo puedo cambiar la joya?",
            answer:
              "El primer ajuste de poste (downsize) suele hacerse entre las 4 y 6 semanas. Para cambios estéticos completos se recomienda esperar la cicatrización total.",
          },
          {
            question: "¿Usan pistola perforadora?",
            answer:
              "No. Todas las perforaciones se realizan con aguja hueca estéril de un solo uso, lo que evita traumatismos en el tejido y favorece una sanación limpia.",
          },
        ],
      },
    ],
  },
  design: {
    category: "Servicio especializado",
    title: "Diseño de tatuajes",
    hook: "De una idea abstracta a una pieza única lista para tu piel.",
    description:
      "Desarrollamos ilustraciones y composiciones exclusivas pensadas desde cero para la anatomía de tu cuerpo, asegurando equilibrio, fluidez y un estilo propio que no verás repetido.",
    images: [tattooHero, tattooProcess, tattooDetail],
    cta: "Solicitar diseño",

    quickFacts: [
      { label: "Entrega de boceto", value: "3 a 5 días hábiles" },
      { label: "Rondas de ajuste", value: "Hasta 2 modificaciones incluidas" },
      { label: "Adaptación", value: "A medida según zona anatómica" },
      { label: "Incluye", value: "Boceto digital + stencil para sesión" },
    ],

    process: [
      {
        title: "Briefing y referencias",
        description:
          "Analizamos tu concepto, estilo preferido, tamaño y el significado que buscas transmitir.",
      },
      {
        title: "Composición anatómica",
        description:
          "Estructuramos el flujo del dibujo respetando el movimiento y volumen natural de la zona.",
      },
      {
        title: "Revisión y ajustes",
        description:
          "Presentamos la propuesta para afinar detalles, sombras o proporciones antes de tatuar.",
      },
      {
        title: "Preparación de stencil",
        description:
          "Dejamos el arte final listo en alta precisión para trasladarlo a tu piel en estudio.",
      },
    ],

    care: {
      before: [
        "Reúne entre 3 y 5 imágenes de referencia del estilo que te gusta.",
        "Define la zona exacta y el tamaño aproximado en centímetros.",
        "Comunica si deseas integrar elementos simbólicos o fechas.",
        "Confía en el criterio compositivo del artista para lograr legibilidad.",
      ],
      after: [
        "Revisa el boceto con calma y solicita todos tus ajustes en una misma ronda.",
        "Evita modificar el tamaño drásticamente el día de la cita para no perder detalle.",
        "Si vas a tatuarte la pieza, hidrata bien la piel los días previos.",
        "El diseño es exclusivo para tu proyecto y se archiva junto a tu historial.",
      ],
    },

    faqs: [
      {
        label: "Proceso creativo",
        subtitle: "Cómo creamos tu pieza.",
        questions: [
          {
            question: "¿El diseño se entrega antes del día de la cita?",
            answer:
              "En proyectos medianos y grandes te enviamos una vista previa días antes de la sesión para validar composición y realizar los ajustes acordados.",
          },
          {
            question: "¿Puedo pedir solo el diseño sin tatuarme en el estudio?",
            answer:
              "Sí, ofrecemos el servicio de ilustración personalizada. El valor depende de la complejidad, nivel de detalle y dimensiones de la obra.",
          },
          {
            question: "¿Copian tatuajes de internet?",
            answer:
              "No realizamos copias exactas de obras de otros artistas. Usamos tus referencias como punto de partida para crear una pieza original y adaptada a ti.",
          },
        ],
      },
      {
        label: "Cambios y reservas",
        subtitle: "Condiciones del servicio.",
        questions: [
          {
            question: "¿Qué pasa si quiero cambiar por completo la idea inicial?",
            answer:
              "Las modificaciones sobre la propuesta base están incluidas. Si decides cambiar totalmente de concepto una vez iniciado el boceto, se cotiza como una nueva propuesta.",
          },
          {
            question: "¿El valor del diseño se abona al tatuaje?",
            answer:
              "Cuando agendas tu sesión en el estudio, el anticipo del diseño se descuenta del valor total del tatuaje según las condiciones acordadas en la asesoría.",
          },
        ],
      },
    ],
  },
};
