import React from 'react';

import {Screen, Box, Text} from '@components';
import {AppScreenProps} from '@routes';

import {usePostCommentList} from '../../../domain/PostComment/useCases/usePostCommentList';

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
