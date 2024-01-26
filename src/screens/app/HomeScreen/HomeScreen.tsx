import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, ViewStyle, StyleProp} from 'react-native';

import {postService, Post} from '@domain';

import {Screen, PostItem} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './components/HomeHeader';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);
  function navigateToSettings() {
    navigation.navigate('SettingsScreen');
  }

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  return (
    <Screen style={screen}>
      <FlatList
        ListHeaderComponent={<HomeHeader />}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}

const screen: StyleProp<ViewStyle> = {paddingBottom: 0, paddingHorizontal: 0};
