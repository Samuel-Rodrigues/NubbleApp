import React from 'react';

import {usePostCommentList} from 'src/domain/PostComment/useCases/usePostCommentList';

import {Screen, Box, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  navigation,
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list} = usePostCommentList(postId);
  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
