import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export interface IRestaurant {
    name: string,
    icon: string,
    photos: string[],
    address: string,
    isOpenNow: boolean,
    rating: number,
    isClosedTemporarily: boolean
}
const RestaurantInfoCard: React.FC<IRestaurant> = (data) => {
    const { name, icon, photos, address, isOpenNow, rating, isClosedTemporarily } = data;
    return(
            <Card elevation={5} style={styles.card}>
                <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0]}} />
                <Text style={styles.title}>{name}</Text>
            </Card>
                
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: 'white'},
    cover: {padding: 20, backgroundColor: 'white'},
    title: { padding: 16 }
});
export default RestaurantInfoCard;