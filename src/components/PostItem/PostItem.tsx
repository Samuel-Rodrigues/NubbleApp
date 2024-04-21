import React from 'react';

import {Post} from '@domain';

import {Box} from '../Box/Box';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  const {commentCount, favoriteCount, reactionCount, author, text} = post;
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={reactionCount}
        commentCount={commentCount}
        favoriteCount={favoriteCount}
      />
      <PostBottom
        author={author}
        commentCount={commentCount}
        text={text}
        id={post.id}
      />
    </Box>
  );
}
