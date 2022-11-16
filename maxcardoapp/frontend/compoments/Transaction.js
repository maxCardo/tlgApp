import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BLACK_COLOR, BORDER_COLOR, FONT_12, FONT_14, FONT_17, PRIMARY_COLOR, SECONDARY_COLOR } from '../constant/Color';

const Transaction = ({ transaction }) => {
  return (
    <>

      <View>
        <Image
          source={require('../../assets/images/person.png')}
          alt="tab icon"
        />
      </View>
      <View style={{ flex: 1, marginLeft: 12 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.Name}>{transaction.name}</Text>
          <Text style={styles.Time}>3 hours ago</Text>
        </View>
        <Text style={styles.Price}>${transaction.price}</Text>
      </View>
    </>

  );
};

export default Transaction;

const styles = StyleSheet.create({
  Name: {
    fontSize: FONT_14,
    color: SECONDARY_COLOR,
    fontWeight: '400'
  },
  Price: {
    fontSize: FONT_17,
    color: BLACK_COLOR,
    fontWeight: '500'
  },
  Time: {
    fontSize: FONT_12,
    color: PRIMARY_COLOR,
    fontWeight: '400'
  },
});
