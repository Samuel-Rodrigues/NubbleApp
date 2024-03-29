import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box} from '../../Box/Box';
import {Text} from '../../Text/Text';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

export function PostBottom({author, commentCount, text, id}: Props) {
  const navigation = useNavigation();

  let commentText = getCommentText(commentCount);

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {postId: id});
  }

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text
          onPress={navigateToPostCommentScreen}
          mt="s8"
          preset="paragraphSmall"
          bold
          color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number) {
  if (commentCount === 0) {
    return null;
  } else {
    return `ver ${commentCount} comentários`;
  }
}
