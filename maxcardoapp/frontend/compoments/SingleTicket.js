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
import { ICON_COLOR } from '../constant/Color';
import ActionSheet from 'react-native-actionsheet';

const SingleTicket = () => {
  let actionSheet = useRef();
  let optionArray = ['Edit', 'Delete', 'cancel'];
  const ShowActionSheet = () => {
    actionSheet.current.show();
  };

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
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
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginRight: 20, fontSize: 12 }}>3 hours ago</Text>
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
                  title={<Text style={{ color: '#000', fontSize: 20 }}>Are you sure? you want to edit or delete.</Text>}
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
        <Text>$200</Text>
        <Text>Sink leaking</Text>
        <Text>
          The leak isn’t happening anymore but if you could still come by and
          check it.
        </Text>
      </View>
    </View>
  );
};

export default SingleTicket;

const styles = StyleSheet.create({});
