import {
  Animated,
  Image,
  LogBox,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import {
  BLACK_COLOR,
  FONT_12,
  FONT_14,
  FONT_17,
  ICON_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../constant/Color';
import ActionSheet from 'react-native-actionsheet';

const SingleTicket = ({ ticket, screen, navigation }) => {
  let actionSheet = useRef();
  let optionArray = ['Edit', 'Delete', 'cancel'];
  const ShowActionSheet = () => {
    actionSheet.current.show();
  };
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
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
          <Text style={styles.Name}>Heather Watson</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.Time, { marginRight: 20, fontSize: 12 }]}>
              3 hours ago
            </Text>
            <View>
              <Pressable onPress={ShowActionSheet}>
                <Text style={{ fontSize: 6, lineHeight: 6 }} color={ICON_COLOR}>
                  {'\u2B24'}
                </Text>
                <Text style={{ fontSize: 6, lineHeight: 6 }} color={ICON_COLOR}>
                  {'\u2B24'}
                </Text>
                <Text style={{ fontSize: 6, lineHeight: 6 }} color={ICON_COLOR}>
                  {'\u2B24'}
                </Text>
              </Pressable>
              <ScrollView>
                <ActionSheet
                  ref={actionSheet}
                  title={
                    <Text style={{ color: SECONDARY_COLOR, fontSize: 18, }}>
                      Are you sure? you want to edit or delete.
                    </Text>
                  }
                  options={optionArray}
                  cancelButtonIndex={2}
                  destructiveButtonIndex={1}
                  onPress={index => {
                    alert(optionArray[index]);
                  }}
                />
              </ScrollView>
            </View>
          </View>
        </View>
        <Text style={styles.Time}>Unit 2, Toronto</Text>
        <Text style={styles.Price}>Sink leaking</Text>
        <Text style={[styles.Name, { color: SECONDARY_COLOR, fontSize: 15 }]}>
          The leak isn’t happening anymore but if you could still come by and
          check it.
        </Text>
      </View>

    </>
  );
};

export default SingleTicket;

const styles = StyleSheet.create({
  Name: {
    fontSize: FONT_14,
    color: SECONDARY_COLOR,
    fontWeight: '400',
    marginBottom: 4,
  },
  Price: {
    fontSize: FONT_17,
    color: BLACK_COLOR,
    fontWeight: '500',
    marginBottom: 4,
  },
  Time: {
    fontSize: FONT_12,
    color: PRIMARY_COLOR,
    fontWeight: '400',
  },
});
