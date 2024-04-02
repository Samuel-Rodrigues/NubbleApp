import React, {useRef} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  ViewStyle,
  StyleProp,
  RefreshControl,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {Screen, PostItem} from '@components';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export function HomeScreen() {
  const {
    list: postList,
    error,
    loading,
    refresh,
    fetchNextPage,
  } = usePostList();

  const flatListRef = useRef<FlatList<Post> | null>(null);

  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={screen} flex={1}>
      <FlatList
        ref={flatListRef}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListEmptyComponent={
          <HomeEmpty refetch={refresh} error={error} loading={loading} />
        }
        ListHeaderComponent={<HomeHeader />}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        refreshing={loading}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0}
      />
    </Screen>
  );
}

const screen: StyleProp<ViewStyle> = {paddingBottom: 0, paddingHorizontal: 0};
