// ─────────────────────────────────────────────
// data.js – Single source of truth for Five a Day English Academy
// ─────────────────────────────────────────────

export const siteConfig = {
  name: "Five a Day",
  fullName: "Five a Day English Academy",
  tagline: "We are here to learn and help our brains grow stronger.",
  taglineEs: "Estamos aquí para aprender y ayudar a nuestros cerebros a fortalecerse.",
  copyright: "© 2025 Silvia Yubitza Moreno Carlín",
  email: "hellofiveaday@gmail.com",
  phone: "967 049 096",
  address: {
    street: "C/ Hermanos Jiménez, 25",
    postalCode: "02004",
    city: "Albacete",
    country: "España",
  },
  hours: {
    phone: "Por teléfono: mañanas y tardes.",
    inPerson: "Presencial: tardes de 16:00 a 20:30, viernes de 16:30 a 18:30.",
  },
  social: {
    instagram: "https://www.instagram.com/fiveadayenglish/",
    facebook: "https://www.facebook.com/profile.php?id=61550744760027",
  },
};

export const navigation = [
  { label: "Quiénes somos", path: "/quienes-somos" },
  { label: "Nuestra metodología", path: "/nuestra-metodologia" },
  { label: "Los ODS", path: "/los-ods" },
  { label: "Sobre la academia", path: "/sobre-la-academia" },
  { label: "Preguntas frecuentes", path: "/preguntas-frecuentes" },
  { label: "Contacto", path: "/#contacto" },
];

export const heroContent = {
  title: "Welcome to",
  highlight: "Five a Day!",
  description:
    "En Five a Day los estudiantes adquieren el inglés de manera natural y significativa mediante 5 rutinas divertidas enfocadas en la lectoescritura.",
  descriptionExtended:
    "Y no sólo aprenden inglés en nuestra academia, sino que lo hacen a la vez que desarrollan capacidades imprescindibles y realizan conexiones con la vida real, dando gran sentido a su aprendizaje.",
  extras:
    "También ofrecemos clases de conversación one-to-one, club de lectura en inglés y preparación para exámenes oficiales para estudiantes más mayores.",
  cta: "¡APÚNTATE AQUÍ!",
  ctaSubtext:
    "Únete a nuestra academia si quieres adquirir el inglés con una metodología increíblemente efectiva y única en toda España. ¿A qué esperas? ¡No dejes pasar esta gran oportunidad!",
};

export const metodologiaHome = {
  sectionTitle: "Metodología 5 a Day",
  intro:
    "Nuestra metodología 5 a Day es única en toda España. Con ella, los estudiantes adquieren la lengua inglesa de manera natural, efectiva y significativa mediante 5 rutinas divertidas basadas en la lectura y la escritura.",
  blocks: [
    {
      title: "¿Por qué la lectoescritura?",
      text: "Desde la infancia, los niños y las niñas sienten gran curiosidad por el mundo que les rodea. La lectura y la escritura de cuentos e historias de su elección permiten desarrollar otras destrezas lingüísticas y muchas capacidades esenciales, al igual que aporta mucho entretenimiento. Es simple, ¡leer y escribir es divertido!",
      image: "/images/lectura-aire-libre.jpg",
    },
    {
      title: "La metodología 5 a Day",
      text: "Nuestro método propio 5 a Day se inspira en las mejores prácticas internacionales en enseñanza y aprendizaje del inglés, y ha sido adaptado por nuestras fundadoras, maestras bilingües con amplia experiencia en aulas dentro y fuera de España. Ofrece un enfoque único centrado en la lectura que fomenta la autonomía, la creatividad y la confianza de cada estudiante, permitiéndoles adquirir el inglés de forma natural y activa, trabajando todas las áreas del idioma de manera divertida y significativa.",
      image: "/images/preschool-class.jpg",
    },
    {
      title: "Estudiantes comprometidos con su aprendizaje y el planeta",
      text: "Los 5 a Day fomentan la independencia y, a su vez, despiertan el entusiasmo y motivación del estudiante para tomar las riendas de su propio aprendizaje. Además, integramos su educación con los Objetivos de Desarrollo Sostenible. Por ello y más, esta academia va mucho más allá del mero aprendizaje de inglés.",
      link: { label: "Saber más", path: "/los-ods" },
      image: "/images/students-committed.jpg",
    },
    {
      title: "Educando en valores",
      text: 'En Five a Day, fomentamos una serie de valores llamados "Keys to Success", ya que desarrollar buenos hábitos y valores ayuda a los estudiantes a tener éxito en todos los ámbitos de la vida. Por este motivo, les guiaremos para que desarrollen habilidades esenciales como el liderazgo, la confianza, la creatividad y la colaboración.',
      image: "/images/child-reading-comic.jpg",
    },
  ],
};

export const founders = [
  {
    id: "claudia",
    name: "Ms Claudia",
    role: "Co-fundadora y maestra bilingüe",
    quoteEn:
      "As long as I know that I am doing my best, I can accept the fact that I am not always going to get it right.",
    quoteEs:
      "Mientras sepa que lo estoy haciendo lo mejor posible, puedo aceptar el hecho de que no siempre voy a hacerlo bien.",
    image: "/images/claudia.jpg",
    about:
      "Me considero una persona metódica y emprendedora, que siempre ha sentido gran pasión por los idiomas, la educación y las artes. De este modo, doy lo mejor de mí para promocionar una educación de calidad a través de un aprendizaje activo, significativo y cooperativo. Adopto una aptitud positiva y de mejora continua afirmando que \"estamos en continuo crecimiento y los errores se convierten en una valiosa oportunidad de aprendizaje\". En cuanto a mi carrera profesional, he tenido la gran oportunidad de trabajar como maestra de inglés en diferentes colegios internacionales en Malta, República Checa, Irlanda y Países Bajos. Sin duda alguna, estas experiencias me han proporcionado la habilidad de aceptar retos y adaptarme rápidamente a nuevos contextos y culturas.",
    experience: [
      { date: "Agosto 2021", text: "Maestra en Quality Schools International, Malta" },
      { date: "Agosto 2019", text: "Maestra en Escuela Internacional en Ostrava, República Checa" },
      { date: "Enero 2019", text: "Maestra en Galway Educate Together School, Irlanda" },
      { date: "Agosto 2017", text: "Maestra en Países Bajos" },
    ],
  },
  {
    id: "silvia",
    name: "Ms Silvia",
    role: "Co-fundadora y maestra bilingüe",
    quoteEn:
      "You must actively shape your own destiny, and the destiny of the world.",
    quoteEs:
      "Debes forjar activamente tu propio destino, y el destino del mundo.",
    image: "/images/silvia.jpg",
    about:
      "En cuanto finalicé mis estudios de Educación Primaria Bilingüe en 2019, me mudé a Bélgica para trabajar en el Colegio Internacional de Lovaina como maestra de primaria en inglés. Durante los más de cuatro años que estuve residiendo en Bélgica, aprendí y consolidé por mi cuenta la metodología 5 a Day para enseñar de manera rápida y efectiva el inglés a estudiantes de diferentes procedencias, edades y niveles de inglés. Al mismo tiempo, me formé como Defensora de las Escuelas Globales de la ONU para integrar la Educación para el Desarrollo Sostenible en mis lecciones. Tanto yo como mis antiguos estudiantes hemos sido testigos de primera mano del éxito de la metodología 5 a Day y, sin lugar a dudas, hubo un gran antes y después tras implantar esta metodología en mis clases de inglés. Los numerosos beneficios de la metodología 5 a Day fueron tan evidentes que el profesorado y la dirección del colegio sintieron gran inspiración tras mi trabajo y decidieron usar a su vez este método en sus propias clases de inglés. Actualmente, estoy entusiasmada de estar de vuelta en España y de poder ayudar a más alumnas y alumnos a aprender inglés con esta metodología tan efectiva e innovadora.",
    experience: [
      {
        date: "Septiembre 2022",
        text: "Invitada como ponente en la Conferencia Internacional de Desarrollo Sostenible de la ONU para compartir su experiencia como maestra y Defensora de las Escuelas Globales",
      },
      {
        date: "Junio 2022",
        text: "Diversos medios de comunicación belgas e internacionales se hacen eco de la visita del Alcalde de Lovaina a la clase de Silvia, incluido el UNSDSN de la ONU",
      },
      {
        date: "Febrero 2022",
        text: "Finaliza con éxito el programa de Global Schools Advocates, iniciativa de la Red de Soluciones para el Desarrollo Sostenible de la ONU",
      },
      {
        date: "Agosto 2021",
        text: "Seleccionada de entre más de 2.000 educadores a nivel internacional para convertirse en Defensora de las Escuelas Globales",
      },
      {
        date: "2019 – 2022",
        text: "Maestra en International School of Leuven, Bélgica",
      },
    ],
  },
];

export const metodologiaPage = {
  title: "¿Qué ofrecemos?",
  intro:
    "Para los más jóvenes, ofrecemos clases de inglés dos veces a la semana de 1 hora y 20 minutos de duración por sesión tanto a nivel principiante como avanzado, y todo el rango intermedio. Además, los viernes ofrecemos sesiones especiales gratuitas llamadas \"Fun Fridays\" durante las cuales se realizan actividades tan divertidas como Zumba en Inglés, talleres de manualidades o actividades dedicadas a los ODS.",
  groups:
    "Trabajamos con grupos reducidos de 8 estudiantes como máximo para garantizar una enseñanza individualizada y adaptada a las necesidades de cada estudiante, la cual es posible gracias a la metodología 5 a Day y nuestras experimentadas maestras.",
  adults:
    "Para adolescentes y adultos, ofrecemos un club de lectura en inglés y clases de conversación en grupos reducidos, para poner en práctica el idioma y mejorar tu pronunciación y confianza al hablar inglés. También ofrecemos preparación para exámenes oficiales.",
  routinesIntro:
    "A continuación, podrás ver un resumen de las 5 rutinas que componen los pilares de la metodología \"5 a Day\" y que los estudiantes llevarán a cabo durante las sesiones:",
  routines: [
    {
      title: "Read to Self",
      description:
        "Lectura independiente. Base fundamental para crear lectores, escritores y aprendices para toda la vida que estén motivados de forma independiente.",
      image: "/images/read-to-self.jpg",
    },
    {
      title: "Read to Someone",
      description:
        "Leer con alguien. Ayuda a los lectores a desarrollar las áreas de comprensión, precisión, fluidez, atención, colaboración, etc. ¡Les encanta la lectura en pareja!",
      image: "/images/read-to-someone.jpg",
    },
    {
      title: "Listen to Reading",
      description:
        "Escucha de la lectura. Proporciona modelos de fluidez que son valiosos para todas las edades, pero especialmente para aquellos cuya comprensión auditiva supera su nivel de lectura y esencial para los que están aprendiendo inglés.",
      image: "/images/listen-to-reading.jpg",
    },
    {
      title: "Work on Writing",
      description:
        "Escritura creativa. Los estudiantes disfrutan escribiendo acerca de temas de su elección, creciendo como escritores con la guía de sus profesoras.",
      image: "/images/work-on-writing.jpg",
    },
    {
      title: "Word Work",
      description:
        "Trabajo con palabras. Se experimenta con patrones ortográficos y gramaticales. Se memorizan palabras usadas con frecuencia y se desarrolla una auténtica curiosidad e interés por palabras nuevas que les permite expandir y enriquecer su vocabulario, así como escribir con corrección.",
      image: "/images/word-work.jpg",
    },
  ],
  funFridays: {
    title: "Fun Fridays!",
    description:
      "Los viernes se llevan a cabo eventos especiales gratuitos de duración variable a los que podrán asistir voluntariamente los niños y niñas. Alguno ejemplos son Zumba en Inglés y talleres de manualidades.",
  },
};

export const odsPage = {
  title: "Five a Day y los ODS",
  subtitle: "Conectando el aprendizaje con la vida real y el planeta",
  intro:
    "¿Conoces los Objetivos de Desarrollo Sostenible o los ODS?\n\nEl mundo necesita más de sus habitantes, especialmente de la siguiente generación, para tener el conocimiento, valores, y habilidades para navegar mejor este futuro incierto, hacer frente a sus grandes retos, y construir comunidades más prósperas y resilientes.",
  educationTitle: "Educación para el Desarrollo Sostenible",
  educationText:
    "El 25 de septiembre de 2015, los líderes mundiales adoptaron un conjunto de objetivos globales para erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos como parte de una nueva agenda de desarrollo sostenible. Nace así la Agenda 2030 con 17 ODS con metas específicas que deben alcanzarse en los próximos años.\n\nLa investigación muestra que la Educación para el Desarrollo Sostenible (EDS) es una herramienta crucial, que no sólo empodera a los estudiantes para dar forma a un mundo mejor, sino que también se desempeñan mejor académicamente.\n\n¿Sabías que más de la mitad de la población de nuestro planeta está por debajo de los 30 años? Es la mayor generación de personas jóvenes que el mundo haya visto. Esto pone a las educadoras como nosotras en una posición de influencia única para educar a millones de estudiantes a sobrepasar los grandes desafíos del siglo XXI y llevar una vida saludable y productiva, en armonía con la naturaleza.\n\nEs por ello que en nuestra academia vamos mucho más allá del inglés y ofrecemos una educación integral que forma a estudiantes independientes, apasionados por la lectoescritura, muy motivados con su propio aprendizaje, con gran creatividad e imaginación, y también ciudadanos responsables y comprometidos con el planeta y su medioambiente. Por todo lo mencionado anteriormente, Five a Day es mucho más que una academia de inglés.",
  sdgGuidelinesNote:
    "Para conocer las directrices sobre el uso del logo de los Objetivos de Desarrollo Sostenible (ODS), los 17 iconos y la ruleta de colores, descargue el manual corporativo.",
  sdgManualUrl:
    "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Guidelines_AUG_2019_Final.pdf",
  sdgImage: "/images/sdg-poster.png",
};

export const sobreAcademiaPage = {
  title: "Sobre la academia",
  intro:
    "Nuestro centro en C/ Hermanos Jiménez 25 en Albacete nace como resultado del esfuerzo, trabajo, ganas e ilusión de dos maestras bilingües (¡hermanas!) con una enorme pasión por el inglés, la educación y la sostenibilidad.\n\nTenemos una gran experiencia en la enseñanza de inglés como lengua extranjera y un método propio innovador. Apostamos por una educación integral de gran calidad.",
  differencesTitle: "Five a Day English Academy: mucho más que aprender inglés",
  differencesIntro:
    "En Five a Day, aprender inglés es una experiencia real, divertida y significativa. Nuestro método propio de cinco estaciones es único en España, diseñado para que niñas y niños, adolescentes y adultos desarrollen habilidades lingüísticas y personales que van mucho más allá del idioma.\n\n¿En qué se diferencia Five a Day de otras academias?",
  differences: [
    {
      title: "✅ Sesiones más largas y efectivas",
      items: [
        "Clases de 1 hora y 20 minutos, dos veces por semana, frente a 50–60 minutos habituales en otras academias.",
        "Tiempo suficiente para inmersión real en el idioma y actividades dinámicas.",
      ],
    },
    {
      title: "✅ Aprendizaje que continúa en casa",
      items: [
        "Plataforma de libros electrónicos nivelados en inglés para seguir practicando de manera autónoma.",
        "Fomenta responsabilidad y autonomía en el aprendizaje de cada estudiante.",
      ],
    },
    {
      title: "✅ Metodología integral y lúdica",
      items: [
        "Cinco estaciones que combinan lectoescritura, conversación, arte, movimiento y proyectos.",
        "Desarrollo de pensamiento crítico, creatividad y curiosidad desde edades tempranas.",
      ],
    },
    {
      title: "✅ Conciencia social y valores",
      items: [
        "Incorporamos los Objetivos de Desarrollo Sostenible (ODS) en actividades prácticas y motivadoras.",
        "Aprender inglés y al mismo tiempo reflexionar sobre el mundo que nos rodea.",
      ],
    },
    {
      title: "✅ Ambiente familiar y seguro",
      items: [
        "Grupos reducidos y un espacio libre de juicios, donde cada estudiante crece con confianza y motivación.",
      ],
    },
  ],
  ctaTitle: "🚀 Elige Five a Day si quieres…",
  ctaItems: [
    "Que el inglés sea divertido, natural y real.",
    "Que tus hij@s desarrollen autonomía, responsabilidad y creatividad.",
    "Que aprendan mientras se divierten y reflexionan sobre el mundo.",
  ],
  testimonials: [
    {
      text: "(...) Tras 9 meses de curso puedo decir que es la extraescolar que por supuesto tengo claro que voy a repetir para mis dos hijas, ellas van felices a la academia, no se saltan nunca un día y han aprendido muchísimo (...). Vivimos cerca y por eso las apuntamos, pero hoy por hoy, si viviera en otro barrio no me importaría coger el coche para llevarlas.... Es el dinero mejor invertido en la educación de mis hijos.",
      author: "Raquel G.",
    },
  ],
  image: "/images/school-days.jpg",
};

export const faqPage = {
  title: "Preguntas frecuentes",
  image: "/images/reading-bookstore.jpg",
  questions: [
    {
      question: "¿Por qué aprender inglés en nuestra academia?",
      answer:
        "Porque es única en toda España, creada por maestras bilingües experimentadas y apasionadas por la educación y la sostenibilidad. Con el método 5 a Day los estudiantes adquieren el inglés de manera divertida, natural y significativa, además de muchas otras capacidades esenciales para la vida personal y académica.",
    },
    {
      question: "¿Qué horario tiene?",
      answer:
        "El horario de apertura de nuestra academia es de lunes a jueves de 15:30h a 20:30h y los viernes de 15:30 a 18:30.\n\nPara cualquier consulta también puedes contactar con nosotras por teléfono o email mañanas y tardes, y nosotras contactaremos contigo con la mayor brevedad posible.",
    },
    {
      question: "¿Cómo son las instalaciones?",
      answer:
        "Contamos con dos aulas espaciosas completamente equipadas para que todas nuestras alumnas y alumnos puedan aprender sintiéndose cómodos y a gusto. Su diseño permite a los estudiantes interactuar entre tod@s o en pequeños grupos, de manera colaborativa y dinámica.",
    },
    {
      question: "¿Cómo son nuestras clases de inglés?",
      answer:
        'Trabajamos con grupos reducidos, lo cual permite proporcionar una enseñanza personalizada y adaptada a las necesidades de cada estudiante. Empleamos la metodología "5 a Day" basada en el libro "The Daily 5" redactado por maestras estadounidenses tras mucha investigación y puesta en práctica en el aula de inglés.',
    },
    {
      question: "¿Cómo inscribirse en nuestra academia?",
      answer:
        "Contacta con nosotras por teléfono llamando al 967049096 o a través de nuestro email hellofiveaday@gmail.com.\n\n¡Te invitamos a conocer a nuestras profesoras en una sesión de conversación 1 to 1 gratuita! Visítanos en nuestras instalaciones en Albacete en C/ Hermanos Jiménez 25.",
    },
    {
      question: "¿Qué otras habilidades se desarrollan aquí?",
      answer:
        'Además de las habilidades básicas del inglés (comprensión y expresión tanto orales como escritas), nuestra academia educa en valores como el respeto, la cooperación, y la responsabilidad entre otros llamados "Keys to Success".',
    },
  ],
};

export const contactForm = {
  title: "Contacta con nosotras",
  subtitle:
    "Rellena el formulario con tus datos personales y nos pondremos en contacto contigo lo antes posible.",
  fields: [
    { name: "nombre", label: "Nombre", type: "text", required: true },
    { name: "apellidos", label: "Apellidos", type: "text", required: false },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "telefono", label: "Teléfono", type: "tel", required: true },
    {
      name: "horario",
      label: "Horario preferente",
      type: "select",
      required: false,
      options: ["14:30", "15:30", "16:30", "17:30", "18:30", "19:30"],
    },
    { name: "edad", label: "Edad del estudiante", type: "text", required: false },
    { name: "mensaje", label: "Déjanos un mensaje...", type: "textarea", required: true },
  ],
  submitLabel: "Enviar",
};
