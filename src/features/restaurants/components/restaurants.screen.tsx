import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import RestaurantInfoCard, { IRestaurant } from "./restaurant-info-card.component";

const restaurant: IRestaurant = {
  name: 'Villa Sheger',
  icon: '', 
  photos: [
    `https://d3ur40406gizl1.cloudfront.net/web_site/images/v2/plates/4.png`,
    `https://www.trifectanutrition.com/hubfs/Meal%20Delivery/vegetarian-meal-delivery-crispy-tofu-quinoa-corn-skillet.jpeg`
  ], 
  address: '', 
  isOpenNow: true,
  rating: 1, 
  isClosedTemporarily: false
}

const isAndroid = Platform.OS === 'android';
const statusBarHeight = isAndroid ? StatusBar.currentHeight : 0;

const RestaurantsScreen: React.FC = () => {
  const [ searchQuery, setSearchQuery ] = useState('');
  const name = 'Villa Sheger';
  return (
        <SafeAreaView style={styles.container}>
          <View  style={styles.search}>
              <Searchbar
                placeholder="Search"
                value={searchQuery}
              />
          </View>
          <View style={styles.list}>
            <RestaurantInfoCard name={restaurant.name} icon={restaurant.icon} photos={restaurant.photos} address={restaurant.address} isOpenNow={restaurant.isOpenNow} rating={restaurant.rating}
             isClosedTemporarily={restaurant.isClosedTemporarily}/>
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    marginTop: statusBarHeight,
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue'
  },
});
export default RestaurantsScreen;