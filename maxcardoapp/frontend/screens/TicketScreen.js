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
import React, { useEffect, useRef, useState } from 'react';
import { BLACK_COLOR, BORDER_COLOR, FONT_15, FONT_24, PRIMARY_COLOR, SECONDARY_COLOR, WHITE_COLOR } from '../constant/Color';
import InputField from '../compoments/InputField';
import { useForm } from 'react-hook-form';
import Transaction from '../compoments/Transaction';
import SingleTicket from '../compoments/SingleTicket';
import Icon from 'react-native-vector-icons/AntDesign';

const TicketScreen = ({ navigation }) => {
  const [number, onChangeNumber] = React.useState(null);
  const ShowActionSheet2 = () => {
    console.log('first');
  };
  const [ticket, setTicket] = useState([
    { id: 1, name: 'Heather Watson', title: "Unit 2, Toronto", description: "The leak isn’t happening anymore but if you could still come by and check it." },
    { id: 2, name: 'Helen C. Daniels', title: "Unit 2, Toronto", description: "The leak isn’t happening anymore but if you could still come by and check it." },
    { id: 3, name: 'Heather Watson', title: "Unit 2, Toronto", description: "The leak isn’t happening anymore but if you could still come by and check it." },
    { id: 4, name: 'Helen C. Daniels', title: "Unit 2, Toronto", description: "The leak isn’t happening anymore but if you could still come by and check it." },
    { id: 5, name: 'Heather Watson', title: "Unit 2, Toronto", description: "The leak isn’t happening anymore but if you could still come by and check it." },
  ]);
  const TicketLength = ticket.length - 1;
  return (
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
              <Icon name="left" size={24} color={BLACK_COLOR} />
              <Text style={styles.Wellcome}>Service Tickets</Text>
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
              placeholder="Search..."
            />
            <View style={{ position: 'absolute', top: 6, right: 6, backgroundColor: SECONDARY_COLOR, padding: 8, borderRadius: 4 }}>
              <Pressable onPress={() => navigation.navigate('FilterModal')}>
                <Image
                  style={{ width: 25, height: 20 }}
                  source={require('../../assets/images/filterIconWhite.png')}
                  alt="tab icon"
                />
              </Pressable>
            </View>
          </View>
          {ticket?.map((ticket, index) => {
            return (
              <Pressable onPress={() => navigation.navigate('TicketDetail')}>
                <View key={index} style={{
                  flexDirection: 'row',
                  borderBottomWidth: TicketLength == index ? 0 : 0.5,
                  borderColor: BORDER_COLOR,
                  paddingVertical: 12,
                }}>
                  <SingleTicket ticket={ticket} />
                </View>
              </Pressable>
            );
          })}

        </View>
      </View>
    </ScrollView>
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
  Heading: {
    fontSize: FONT_15,
    color: PRIMARY_COLOR,
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 12,
  },
  Wellcome: {
    fontWeight: '600',
    fontSize: FONT_24,
    color: BLACK_COLOR,
    marginTop: 10
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
});
