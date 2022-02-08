import React from 'react';

import { CardView, ImageCard } from './styles';

interface CardProps {
  image: string;
}

export function Card({ image }: CardProps) {
  const images: any = {
    banner01: require('./../../assets/img/banner01.jpg'),
    banner02: require('./../../assets/img/banner02.jpg'),
    banner03: require('./../../assets/img/banner03.png'),
    banner04: require('./../../assets/img/banner04.jpg'),
  };

  return (
    <CardView>
      <ImageCard source={images[image]} />
    </CardView>
  );
}
