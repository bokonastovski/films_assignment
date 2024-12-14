export const translations = {
  en: {
    title: "Star Wars Films",
    episode: "Episode",
    director: "Director",
    releaseDate: "Release Date",
    producers: "Producers",
    releaseYear: "Release Year", 
    sortBy: "Sort By", 
    noFilms: "No films available.",
    loadMore: "Load More",
  },
  de: {
    title: "Star Wars Filme",
    episode: "Episode",
    director: "Regisseur",
    releaseDate: "Erscheinungsdatum",
    producers: "Produzenten",
    releaseYear: "Erscheinungsjahr", 
    sortBy: "Sortieren nach", 
    noFilms: "Keine Filme verfügbar.",
    loadMore: "Mehr laden",
  },
};

export type TranslationKeys = keyof (typeof translations)["en"];
