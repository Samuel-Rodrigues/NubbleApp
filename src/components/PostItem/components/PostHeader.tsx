import React from 'react';

import {Post} from '@domain';

import {Box} from '../../Box/Box';
import {ProfileAvatar} from '../../ProfileAvatar/ProfileAvatar';
import {Text} from '../../Text/Text';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text preset="paragraphMedium" semiBold ml="s12">
        {author.userName}
      </Text>
    </Box>
  );
}
