import React from 'react';
import { Gallery } from '../../interfaces';

import { ContainerGalleryItem, GalleryImg } from './styles';

interface GalleryProps {
  item: Gallery;
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
