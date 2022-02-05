import React from 'react';
import { ContainerGalleryItem, GalleryImg } from './styles';

interface GalleryProps {
  item: any;
}

export function GalleryItem({ item }: GalleryProps) {
  return (
    <ContainerGalleryItem>
      <GalleryImg
        source={{
          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
      />
    </ContainerGalleryItem>
  );
}
