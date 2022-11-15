import {
  Button,
  Image,
  LogBox,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { WHITE_COLOR } from '../constant/Color';
import InputField from '../compoments/InputField';
import { useForm } from 'react-hook-form';
import Transaction from '../compoments/Transaction';
import SingleTicket from '../compoments/SingleTicket';
import ActionSheet from 'react-native-actionsheet';

const TicketScreen = ({ navigation }) => {
  const [number, onChangeNumber] = React.useState(null);
  const ShowActionSheet2 = () => {
    console.log('first');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <View>
              <Image
                source={require('../../assets/images/person.png')}
                alt="tab icon"
              />
              <Text>Service Tickets</Text>
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
              <Image
                style={{ width: 25, height: 20 }}
                source={require('../../assets/images/filterIcon1.png')}
                alt="tab icon"
              />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Search..."
            />
            <View style={{ position: 'absolute', top: 16, right: 16 }}>
              <Pressable onPress={() => navigation.navigate('FilterModal')}>
                <Image
                  style={{ width: 25, height: 20 }}
                  source={require('../../assets/images/filterIcon1.png')}
                  alt="tab icon"
                />
              </Pressable>
            </View>
          </View>
          <SingleTicket />
          <SingleTicket />
        </View>
      </ScrollView>
    </View>
  );
};

export default TicketScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    paddingHorizontal: 40,
    paddingTop: Platform.OS == 'ios' ? 0 : 35,
  },
  status: {
    height: StatusBar.currentHeight,
  },

  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgb(181, 188, 194)',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
});
