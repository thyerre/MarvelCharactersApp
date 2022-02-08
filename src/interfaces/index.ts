export interface MarvelCharacter {
  name: string;
  id: number;
  thumbnail: Thumbnail;
  description: string;
}

export interface Thumbnail {
  extension: string;
  path: string;
}

export interface Gallery {
  thumbnail: Thumbnail;
}
