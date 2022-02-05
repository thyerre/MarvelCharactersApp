export interface Avenger {
  name: string;
  id: number;
  thumbnail: Thumbnail;
  description: string;
}

export interface Thumbnail {
  extension: string;
  path: string;
}
