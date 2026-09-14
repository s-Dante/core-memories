export const games = [
  {
    id: "world-park",
    title: "World Park",
    status: "ACTIVO",
    releaseDate: "TBA",
    genre: ["Exploración", "Coleccionables", "Ambiental"],
    engine: "UE5",
    shortDescription: "Explora zonas inspiradas en culturas de diferentes continentes y monumentos del mundo y reúne estampillas para completar el álbum del mundial de Adrien.",
    description: "Adrien, un coleccionista entusiasta, queda atrapado dentro de World Park: un espacio de zonas temáticas que celebran culturas del mundo. Para volver a su realidad, deberá reunir estampillas únicas vinculadas a monumentos, y hallando rutas ingeniosas en un mundo sin combate.",
    coverImage: "/resources/imgs/GamesImgs/Covers/WorldPark/WorldPark_Cover.jpg",
    folderImage: "/resources/imgs/GamesImgs/Covers/WorldPark/WorldPark_Cover.jpg",
    screenshots: [
      "/resources/imgs/GamesImgs/Screens/worldpark_01.jpg",
      "/resources/imgs/GamesImgs/Screens/worldpark_02.jpg"
    ],
    features: [
      "Explora el entorno y visita puntos de interés en el mapa.",
      "Obtén la estampilla y el apunte cultural asociado.",
      "Completa series temáticas para desbloquear la salida de ese mundo."
    ],
    team: ["dante-fernandez", "fernanda-gonzalez", "stacy-chapa", "sofia-villegas"],
    details: {
      location: "Parque Temático World Park",
      caseId: "#1121122",
      theme: "Exploración y Aventuras",
      platforms: ["PC", "UE5 (Prototipo)"],
      ageRating: "E / A (Todos)",
      playtime: "Sesiones cortas (10–20 min por zona)",
      story: "Adrien, un coleccionista entusiasta, queda atrapado dentro de World Park: un espacio de zonas temáticas que celebran culturas del mundo. Para volver a su realidad, deberá reunir estampillas únicas vinculadas a monumentos, y hallando rutas ingeniosas en un mundo sin combate.",
      gameplay: "Bucle principal: Explorar → visitar monumentos → encontrar estampillas, rutas alternativas, sigilo ligero) → Completar colección, el reto es la observación y el descubrimienyo del entorno.",
      coreLoop: [
        "Explora el entorno y visita puntos de interés en el mapa.",
        "Obtén la estampilla y el apunte cultural asociado.",
        "Completa series temáticas para desbloquear la salida de ese mundo."
      ],
      character: {
        name: "Adrien",
        profile: "Ágil, curioso, pacifista; aprende del mundo a través de su álbum.",
        abilities: ["Salto y escalada básicos (con mejoras por zona)"],
        collectibles: {
          stampsTotal: 12,
          sets: [
            {
              name: "Maravillas Clásicas",
              bonus: "Marcadores permanentes en el mapa"
            }
          ],
          loreCards: true,
          educationalNotes: "Cada estampilla incluye curiosidad cultural no intrusiva."
        },
        mechanics: [
          "encontrar los senderos correctos para cruzar por el mapa",
          "buscar la estampilla cerca de los monumentos",
          "completar el mapa"
        ]
      },
      audio: {
        style: "Ambient/World en concordancia de cada zona, sutil y relajante",
        fx: "Confirmaciones suaves al encontrar cada estampillas"
      },
      uiUx: {
        map: "Mapa ligero con marcadores diegéticos",
        collectopedia: "Álbum con sets y progreso por zona"
      },
      artBible: [
        "/resources/img/Games/WorldPark/art1.jpg",
        "/resources/img/Games/WorldPark/art2.jpg"
      ],
      links: {
        pressKit: "/resources/press/worldpark_kit.zip",
        trailer: "/resources/video/worldpark_trailer.mp4"
      }
    },
    seo: {
      keywords: ["World Park", "juego de exploración", "coleccionables", "UE5"],
      excerpt: "Explora monumentos del mundo en un parque mágico y completa tu álbum de estampillas."
    }
  },
  {
    id: "robot-mission",
    title: "Robot Mission",
    status: "ACTIVO",
    releaseDate: "TBA",
    genre: ["Acción", "Shooter", "Exploración"],
    engine: "UE5",
    shortDescription: "Controla a Unidad-11 y detén una fábrica automatizada cuya IA ha corrompido a sus robots.",
    description: "Un complejo industrial automatizado sufrió una corrupción en su IA central, comenzando la creación de un ejército de droides alterados que causan malfuncionamientos y se vuelven hostiles. Tú eres Unidad-11, una unidad creada fuera de la red del sistema con la misión de infiltrarte en la fábrica, restaurar el control del complejo y detener la amenaza antes de que el sistema produzca más máquinas hostiles.",
    coverImage: "/resources/imgs/GamesImgs/Covers/comingsoon.jpg",
    folderImage: "/resources/imgs/GamesImgs/Covers/RobotMission/robot mision.png",
    screenshots: [
      "/resources/imgs/GamesImgs/Screens/worldpark_01.jpg",
      "/resources/imgs/GamesImgs/Screens/worldpark_02.jpg"
    ],
    features: [
      "Explora distintas zonas de una fábrica automatizada.",
      "Combate contra robots hostiles generados por la IA corrupta.",
      "Obtén llaves, recursos y mejoras para avanzar entre áreas."
    ],
    team: ["dante-fernandez", "fernanda-gonzalez", "sofia-villegas"],
    details: {
      location: "Complejo industrial automatizado",
      caseId: "#1993214",
      theme: "Acción y Ciencia Ficción",
      platforms: ["PC", "UE5 (Prototipo)"],
      ageRating: "T / B (Adolescentes)",
      playtime: "Sesiones cortas (15–25 min)",
      story: "Un complejo industrial automatizado sufrió una corrupción en su IA central, comenzando la creación de un ejército de droides alterados que causan su malfuncionamiento y los vuelve hostiles. El jugador controla a Unidad-11, una unidad creada fuera de la red del sistema cuya misión es infiltrarse en la fábrica, restaurar su energía, desactivar las líneas de ensamblaje y apagar el núcleo de control central.",
      gameplay: "Exploración y combate dentro de una fábrica automatizada. El jugador deberá recorrer diferentes zonas del complejo, derrotar robots hostiles, recolectar recursos y encontrar componentes o llaves necesarias para desbloquear nuevas áreas y completar los objetivos principales.",
      coreLoop: [
        "Explorar las zonas de la fábrica (patio y almacenes).",
        "Derrotar robots hostiles y recolectar recursos.",
        "Obtener componentes eléctricos o llaves para desbloquear nuevas áreas.",
        "Completar las misiones principales hasta llegar al núcleo central."
      ],
      character: {
        name: "Unidad-11",
        profile: "Unidad robótica independiente creada fuera de la red principal para detener la corrupción del sistema.",
        abilities: [
          "Caminar, correr y saltar",
          "Uso de armas de energía",
          "Interacción con terminales y sistemas electrónicos"
        ],
        collectibles: {
          stampsTotal: 0,
          sets: [],
          loreCards: false,
          educationalNotes: "El jugador puede recolectar recursos y componentes eléctricos necesarios para avanzar o mejorar equipamiento."
        },
        mechanics: [
          "caminar, correr y saltar para desplazarse",
          "explorar las distintas zonas del complejo",
          "disparar para eliminar robots hostiles",
          "recolectar recursos y componentes",
          "interactuar con puertas, terminales y NPCs"
        ]
      },
      actors: {
        player: "Unidad-11",
        npcs: [
          "Androide de información (explica el funcionamiento del complejo)",
          "Androide comerciante (tienda de mejoras y armas)",
          "Androide de acceso (permite entrada a la fábrica)"
        ],
        enemies: [
          "Robot Guardia",
          "Robot Centinela"
        ]
      },
      environment: [
        "Patio exterior del complejo",
        "Almacén zona 1",
        "Almacén zona 2",
        "Almacén zona 3"
      ],
      rules: [
        "El jugador debe recorrer la fábrica para avanzar entre zonas.",
        "Debe encontrar objetos o componentes necesarios para desbloquear nuevas áreas.",
        "Debe completar las misiones principales para concluir el juego.",
        "Si la barra de vida llega a 0, el jugador pierde y debe reiniciar.",
        "Se deben completar las tres misiones principales para lograr la victoria."
      ],
      playerMotivation: [
        "Evitar ser destruido por los robots hostiles.",
        "Avanzar entre zonas de la fábrica.",
        "Descubrir objetos, mejoras y nuevas áreas.",
        "Mejorar progresivamente al personaje.",
        "Desactivar el núcleo de producción y detener la fábrica."
      ],
      particles: [
        "Chispas de electricidad",
        "Polvo",
        "Disparos",
        "Moscos",
        "Explosiones en objetos destruibles",
        "Rayos de energía",
        "Vapor en tuberías",
        "Agua en tuberías"
      ],
      audio: {
        style: "Ambient industrial con tensión sci-fi",
        fx: "Disparos de energía, chispas eléctricas, maquinaria industrial"
      },
      uiUx: {
        map: "Mapa de zonas de la fábrica",
        collectopedia: "Inventario de recursos y mejoras"
      },
      artBible: [
        "/resources/img/Games/WorldPark/art1.jpg",
        "/resources/img/Games/WorldPark/art2.jpg"
      ],
      links: {
        pressKit: "/resources/press/worldpark_kit.zip",
        trailer: "/resources/video/worldpark_trailer.mp4"
      }
    },
    seo: {
      keywords: ["Robot Mission", "shooter sci fi", "robots", "UE5"],
      excerpt: "Controla a Unidad-11 y detén una fábrica automatizada cuyo sistema central ha corrompido a todos los robots."
    }
  },
  {
    id: "subatomic-shopping-flight",
    title: "Subatomic Shopping Flight",
    status: "EN DESARROLLO",
    releaseDate: "TBA",
    genre: ["Party game", "Action", "Racing game"],
    engine: "UE5",
    shortDescription: "En un centro comercial se encuentran unas diminutas partículas buscando completar su lista lo más rápido posible para ir a pagar sus compras.",
    description: "En un centro comercial se encuentran unas diminutas partículas, que históricamente no se llevan muy bien, por lo que, con la intención de no verse por mucho tiempo y terminar de hacer el mandado antes que los demás, buscan completar su lista lo mas rápido posible para ir a pagar sus compras, aunque su competitividad les haga hacerles travesuras a las otras partículas.",
    coverImage: "/resources/imgs/GamesImgs/Covers/SubatomicShoppingFIght.JPG",
    folderImage: "/resources/imgs/GamesImgs/Covers/SubatomicShoppingFlight-folder.jpg",
    screenshots: [],
    features: [
      "Completa tu lista de compras",
      "Ser el primero en pagar tus compras",
      "Ataca por lo menos a un rival"
    ],
    team: ["dante-fernandez", "fernanda-gonzalez", "stacy-chapa", "narayani-cabrera", "cristina-maldonado"],
    details: {
      location: "Centro comercial",
      caseId: "#9988776",
      theme: "Party y Competitivo",
      platforms: ["PC"],
      ageRating: "E (Todos)",
      playtime: "Sesiones rápidas",
      story: "En un centro comercial se encuentran unas diminutas partículas, que históricamente no se llevan muy bien, por lo que buscan completar su lista lo mas rápido posible.",
      gameplay: "Completar listas de compras y atacar a rivales.",
      coreLoop: [
        "Buscar artículos de la lista de compras.",
        "Evitar o atacar a otras partículas rivales.",
        "Llegar primero a pagar para ganar."
      ],
      character: {
        name: "Partícula",
        profile: "Diminuta y competitiva.",
        abilities: ["Correr", "Atacar", "Recoger objetos"],
        collectibles: {
          stampsTotal: 0,
          sets: [],
          loreCards: false,
          educationalNotes: ""
        },
        mechanics: [
          "correr por el centro comercial",
          "recolectar items",
          "atacar rivales"
        ]
      },
      audio: {
        style: "Divertido y frenético",
        fx: "Golpes de caricatura, recolección de items"
      },
      uiUx: {
        map: "Indicadores de items",
        collectopedia: "Lista de compras"
      },
      artBible: [],
      links: {}
    },
    seo: {
      keywords: ["Subatomic Shopping Flight", "party game", "racing", "multijugador"],
      excerpt: "Un party game frenético donde partículas diminutas compiten por completar su lista de compras."
    }
  }
];

export const getGameById = (id) => games.find((game) => game.id === id);
export const getAllGames = () => games;