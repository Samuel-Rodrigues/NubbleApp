import React from 'react';
import {Image, Dimensions} from 'react-native';

import {Post} from '@domain';

type Props = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: Props) {
  return (
    <Image
      source={{uri: imageURL}}
      resizeMode="cover"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
    />
  );
}
