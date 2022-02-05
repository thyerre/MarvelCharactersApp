import React from 'react';
import { View } from 'react-native';
import { GalleryItem } from '../GalleryItem';
import { ContainerGallery, GalleryTitle } from './styles';

interface GalleryProps {
  items: any[];
  title: string;
}

export function GalleryList({ items, title }: GalleryProps) {
  const renderItem = (item: any) => (
    <GalleryItem item={item.item} key={item.id} />
  );

  return (
    <View>
      {items.length > 0 ? (
        <>
          <GalleryTitle>{title}</GalleryTitle>
          <ContainerGallery
            horizontal
            data={items}
            renderItem={renderItem}
            keyExtractor={(avenger: any) => avenger.id}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : null}
    </View>
  );
}
