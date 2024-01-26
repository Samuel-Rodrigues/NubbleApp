import React from 'react';

import {Post} from '@domain';

import {Box, TouchableOpacityBox} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostIActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {
    console.log('like post');
  }

  function navigateToComments() {
    console.log('navigate to comments');
  }

  function favoritePost() {
    console.log('favorite post');
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        icon={{default: 'heart', marked: 'heartFill'}}
        onPress={likePost}
        text={reactionCount}
      />
      <Item
        marked={false}
        icon={{default: 'comment', marked: 'comment'}}
        onPress={navigateToComments}
        text={commentCount}
      />
      <Item
        marked={false}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        onPress={favoritePost}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({icon, onPress, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      mr="s24"
      alignItems="center"
      flexDirection="row"
      onPress={onPress}>
      <Icon
        color={marked ? 'marker' : undefined}
        name={marked ? icon.marked : icon.default}
        size={24}
      />
      {text > 0 && (
        <Text bold ml="s4" preset="paragraphSmall">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
