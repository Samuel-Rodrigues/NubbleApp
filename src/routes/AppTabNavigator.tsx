import React from 'react';

import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  NewPostScreen,
  FavoriteScreen,
  MyProfileScreen,
} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};

const Tabs = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}} tabBar={renderTabBar}>
      <Tabs.Screen name="HomeScreen" component={HomeScreen} />
      <Tabs.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tabs.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tabs.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tabs.Navigator>
  );
}
