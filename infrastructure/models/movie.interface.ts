export interface Movie {
  id: string;
  title: string;
  description: string;
  releaseDate: Date;
  raiting: number;
  poster: string;
  backdrop: string;
}

export interface MovieDetails extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}
