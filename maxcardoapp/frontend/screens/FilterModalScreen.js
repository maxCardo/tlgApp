import {
  Button,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { BORDER_COLOR, SECONDARY_COLOR, WHITE_COLOR } from '../constant/Color';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../compoments/CustomButton';
import CheckBox from '@react-native-community/checkbox';
import { Controller, useForm } from 'react-hook-form';

const FilterModalScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 20,
          left: 40,
          right: 40,
          borderRadius: 6,
          backgroundColor: '#000',
        },
      });
  }, [navigation]);

  const handleSubmit = item => {
    let data = {
      open: open,
      closed: closed,
      inProgress: inProgress,
    };
    console.log(data);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View
        style={{
          marginTop: 30,
          paddingBottom: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderColor: BORDER_COLOR,
          borderBottomWidth: 1,
        }}>
        <View>
          <Text style={{ fontSize: 20, color: SECONDARY_COLOR }}>Filter</Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="close" size={24} color="#000" />
          </Pressable>
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <CheckBox
            tintColors={{ true: 'rgb(53, 57, 62)', false: BORDER_COLOR }}
            value={open}
            onValueChange={setOpen}
            defaultChecked={open}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Open</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CheckBox
            tintColors={{ true: 'rgb(53, 57, 62)', false: BORDER_COLOR }}
            value={inProgress}
            onValueChange={setInProgress}
            defaultChecked={inProgress}
            style={styles.checkbox}
          />
          <Text style={styles.label}>In Progress</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CheckBox
            tintColors={{ true: 'rgb(53, 57, 62)', false: BORDER_COLOR }}
            value={closed}
            onValueChange={setClosed}
            defaultChecked={closed}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Closed</Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 40,
          right: 40,
          borderRadius: 6,
        }}>
        <CustomButton onPress={handleSubmit} title="Apply Filter" />
      </View>
    </View>
  );
};

export default FilterModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    paddingHorizontal: 40,
    paddingTop: Platform.OS == 'ios' ? 0 : 35,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 12,
  },
});
