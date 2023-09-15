import { ActivityIndicator, FlatList, TouchableOpacity, View } from 'react-native';
import React from 'react';
import GlobalView from '../component/global/GlobalView';
import MarketComponent from '../component/MarketComponent';
import StyledText from '../component/Text/StyledText';

const Market = () => {
  const [market, setMarket] = React.useState(null);
  const allCategories = [...new Set(market?.map((m) => m.category))];
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  React.useEffect(() => {
    const url = 'https://dummyjson.com/products';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMarket(data.products));
  }, []);
  const Categories = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          margin: 10,
          borderRadius: 5,
          backgroundColor: 'transparent',
          height: 60,
          paddingHorizontal: 10,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
        }}
        onPress={() => setSelectedCategory(item)}
      >
        <StyledText bold>{item[0].toUpperCase() + item.slice(1)}</StyledText>
      </TouchableOpacity>
    );
  };

  const renderByCategory = (categoryName) => {
    const defaultCategory = categoryName || allCategories[0];
    return (
      <View>
        <FlatList
          data={market.filter((m) => m.category === defaultCategory)}
          renderItem={({ item }) => <MarketComponent {...item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };
  return (
    <GlobalView>
      <StyledText bold big left>
        Market
      </StyledText>
      <View>
        {!market ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={allCategories}
            renderItem={({ item }) => <Categories item={item} />}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
      <View>{!market ? <ActivityIndicator /> : renderByCategory(selectedCategory)}</View>
    </GlobalView>
  );
};

export default Market;
