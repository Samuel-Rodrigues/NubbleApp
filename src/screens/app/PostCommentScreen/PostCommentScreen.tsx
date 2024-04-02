import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment} from '@domain';

import {Screen} from '@components';
import {AppScreenProps} from '@routes';

import {usePostCommentList} from '../../../domain/PostComment/useCases/usePostCommentList';

import {PostCommentItem} from './components/PostCommentItem';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list} = usePostCommentList(postId);

  const renderItem = ({item}: ListRenderItemInfo<PostComment>) => {
    return <PostCommentItem postComment={item} />;
  };
  return (
    <Screen canGoBack title="Comentários">
      <FlatList data={list} renderItem={renderItem} />
    </Screen>
  );
}
