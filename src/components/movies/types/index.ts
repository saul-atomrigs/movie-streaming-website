export interface MovieType {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

export interface MovieListType {
  data: MovieType[];
  title: string;
}

export interface MovieCardType {
  data: MovieType;
  children?: React.ReactNode;
}
