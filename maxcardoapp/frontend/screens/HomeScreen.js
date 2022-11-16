import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  BLACK_COLOR,
  BORDER_COLOR,
  FONT_14,
  FONT_15,
  FONT_17,
  FONT_24,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from '../constant/Color';
import InputField from '../compoments/InputField';
import { useForm } from 'react-hook-form';
import Transaction from '../compoments/Transaction';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  const [transection, setTransection] = useState([
    { id: 1, name: 'Heather Watson', price: 200 },
    { id: 2, name: 'Helen C. Daniels', price: 100 },
    { id: 3, name: 'Heather Watson', price: 150 },
    { id: 4, name: 'Helen C. Daniels', price: 200 },
    { id: 5, name: 'Heather Watson', price: 30 },
  ]);
  const length = transection.length - 1;
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <View style={{ marginTop: 20, marginBottom: 130 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <View>
                <Text style={styles.HelloUser}>Hello John,</Text>
                <Text style={styles.Wellcome}>Welcome back!</Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/images/person.png')}
                  alt="tab icon"
                />
              </View>
            </View>
            <View style={{ position: 'relative', marginBottom: 20 }}>
              <View style={{ position: 'absolute', top: 16, left: 16 }}>
                <Icon name="search1" size={20} color={PRIMARY_COLOR} />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholderTextColor={PRIMARY_COLOR}
                placeholder="Search..."
                keyboardType="email-address"
              />
              <View style={{ position: 'absolute', top: 16, right: 16 }}>
                <Image
                  style={{ width: 22, height: 20 }}
                  source={require('../../assets/images/filterIcon1.png')}
                  alt="tab icon"
                />
              </View>
            </View>
            <Text style={styles.Heading}>TICKETS DUE THIS WEEK (2)</Text>
            <View style={{ backgroundColor: 'gray', height: 150 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.subHeading}>View all Opened Tickets</Text>
              <Text style={{ marginHorizontal: 10 }}>
                <Icon name="right" size={16} color={BLACK_COLOR} />
              </Text>
            </View>
            <Text style={styles.Heading}>RECENT TRANSACTIONS</Text>
            {transection?.map((transaction, index) => {
              return (

                <View key={index}
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: length == index ? 0 : 0.5,
                    borderColor: BORDER_COLOR,
                    paddingVertical: 16,
                  }}>
                  <Transaction transaction={transaction} />
                </View>

              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    paddingHorizontal: 40,
    paddingTop: Platform.OS == 'ios' ? 0 : 35,
  },

  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgb(181, 188, 194)',
    paddingVertical: 10,
    paddingHorizontal: 50,
    color: BLACK_COLOR,
    fontWeight: '500',
    fontSize: FONT_15
  },
  Heading: {
    fontSize: FONT_15,
    color: PRIMARY_COLOR,
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 12,
  },
  subHeading: {
    color: SECONDARY_COLOR,
    fontSize: FONT_15,
    textTransform: 'none',
    marginBottom: 22,
    marginTop: 16,
    fontWeight: '500',
  },
  Wellcome: {
    fontWeight: '600',
    fontSize: FONT_24,
    color: BLACK_COLOR,
  },
  HelloUser: {
    fontSize: FONT_17,
    fontWeight: '500',
    color: PRIMARY_COLOR,
  },
});
