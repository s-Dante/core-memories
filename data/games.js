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
    coverImage: "/resources/imgs/GamesImgs/Covers/WorldPark/cover.jpg",
    screenshots: [
      "/resources/imgs/GamesImgs/Screens/worldpark_01.jpg",
      "/resources/imgs/GamesImgs/Screens/worldpark_02.jpg"
    ],
    features: [
      "Explora el entorno y visita puntos de interés en el mapa.",
      "Obtén la estampilla y el apunte cultural asociado.",
      "Completa series temáticas para desbloquear la salida de ese mundo."
    ],
    team: ["dante-fernandez", "fernanda-gonzalez", "stacy-chapa", "sofia-villegas"]
  }
];

export const getGameById = (id) => games.find((game) => game.id === id);
export const getAllGames = () => games;
