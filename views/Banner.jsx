import { FlatList, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StyledText from '../component/Text/StyledText';
import ServiceComponent from '../component/ServiceComponent';
import TextComponent from '../component/TextComponent';
import GlobalView from '../component/global/GlobalView';
import { newsData, exploreData } from '../data/data';
import Details from './Details';
import Modal from './Modal';

const Banner = () => {
  const [news, setNews] = useState(newsData);
  return (
    <GlobalView>
      <ScrollView style={styles.container}>
        <StyledText big bold left>
          Productos
        </StyledText>
        <FlatList
          data={news}
          renderItem={({ item }) => <TextComponent {...item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <StyledText small bold left>
          Servicios
        </StyledText>
        <FlatList
          data={exploreData}
          renderItem={({ item }) => <ServiceComponent {...item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </GlobalView>
  );
};

export const BannerNavigationScreen = () => {
  const BannerStackNavigator = createStackNavigator();
  return (
    <BannerStackNavigator.Navigator initialRouteName="Banner">
      <BannerStackNavigator.Screen name="Banner" component={Banner} />
      <BannerStackNavigator.Screen name="Details" component={Details} />
      <BannerStackNavigator.Screen
        name="Modal"
        component={Modal}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </BannerStackNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
