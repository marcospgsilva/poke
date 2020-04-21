import React from 'react';
import { View, Animated, Text, Image } from 'react-native';

import styles from './styles';

import Diamond from '../../../assets/diamond.png'

export default function PokeCard({ spin, img, name, value }) {
    return (
        <Animated.View
            style={[styles.cardMatch, { transform: [{ rotateY: spin }] }]}>
            <Image source={{ uri: `${img}` }} style={styles.pokeImage} resizeMode="contain" />
            <Text style={styles.titleName}>{name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Diamond} resizeMode="contain" style={styles.imageDiamond} />
                <Text style={styles.value}>{value}</Text>
            </View>
        </Animated.View>
    );
}
