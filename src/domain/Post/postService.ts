import {apiAdapter} from '@api';
import {Page} from '@types';

import {postApi} from './post.Api';
import {postAdapter} from './postAdapter';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({page});
  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

export const postService = {getList};
