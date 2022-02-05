export interface Avenger {
  name: string;
  id: number;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  extension: string;
  path: string;
}
