import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Transaction = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingVertical: 12,
      }}>
      <View>
        <Image
          source={require('../../assets/images/person.png')}
          alt="tab icon"
        />
      </View>
      <View style={{ flex: 1, marginLeft: 12 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Heather Watson</Text>
          <Text>3 hours ago</Text>
        </View>
        <Text>$200</Text>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
