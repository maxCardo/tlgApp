import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  BACKGROUND_COLOR,
  BLACK_COLOR,
  BORDER_COLOR,
  FONT_14,
  FONT_15,
  FONT_24,
  ICON_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from '../constant/Color';
import Icon from 'react-native-vector-icons/AntDesign';
import Message from 'react-native-vector-icons/AntDesign';
import Envelope from 'react-native-vector-icons/EvilIcons';
import Phone from 'react-native-vector-icons/Feather';
import CustomButton from '../compoments/CustomButton';
import InputField from '../compoments/InputField';
import { Controller, useForm } from 'react-hook-form';
import InspectionInput from '../compoments/InspectionInput';
import CheckBox from '@react-native-community/checkbox';
import CustomCheckbox from '../compoments/CustomCheckbox';
import CustomTextarea from '../compoments/CustomTextarea';
import NextPrevButton from '../compoments/NextPrevButton';

const Inspection2 = ({ navigation }) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });


  }, [navigation]);
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitPrev = data => {
    navigation.push('Inspection1')
  };
  const submitNext = data => {
    navigation.push('Inspection3')
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={SECONDARY_COLOR}
        barStyle="light-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.topSection]}>
          <View style={{ paddingHorizontal: 40 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Pressable>
                  <Icon name="left" size={24} color={WHITE_COLOR} />
                </Pressable>
              </View>
              <View>
                <Image
                  source={require('../../assets/images/person.png')}
                  alt="tab icon"
                />
              </View>
            </View>

            <View style={{ marginBottom: 40 }}>
              <Text style={styles.Wellcome}>Move Out Inspection</Text>
              <Text style={styles.subHeading}>
                Cleaning Condition
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={{ paddingHorizontal: 40, marginTop: 20 }}>
            <View style={styles.condition}>
              <Text style={styles.conditionText}>Interior Cleanliness Condition</Text>
            </View>
            <CustomCheckbox label='Property left in clean condition consistent with move in' state={open} setState={setOpen} />
            <CustomCheckbox label='Property left in an unclean condition (general)' state={open} setState={setOpen} />
            <CustomCheckbox label='Stove cleaning required' state={open} setState={setOpen} />
            <CustomCheckbox label='Fridge cleaning required' state={open} setState={setOpen} />
            <CustomCheckbox label='Items/debris left 1-4 large trash bags' state={open} setState={setOpen} />
            <CustomCheckbox label='Items/debris left (up to 7 yards)' state={open} setState={setOpen} />
            <CustomCheckbox label='Large amount of items/debris left (15-28 yards)' state={open} setState={setOpen} />



            <Text style={styles.Clean}>Cleaning notes</Text>
            <CustomTextarea
              name="tech"
              multiline={true}
              numberOfLines={4}
              control={control}
              label=""
              subLabel="Section Notes:"
              optional={true}

            />

            <View style={{ marginTop: 40 }}>
              <NextPrevButton onPrev={handleSubmit(submitPrev)} onNext={handleSubmit(submitNext)} next="Next" prev="Back" />
              <View style={{ alignItems: 'center', marginVertical: 16 }}>
                <Text style={styles.page}>Page 2 of 6</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Inspection2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: WHITE_COLOR,
    paddingTop: Platform.OS == 'ios' ? 0 : 35,
  },
  Clean: {
    color: BLACK_COLOR,
    fontSize: FONT_15,
    fontWeight: '500',
    marginBottom: 20
  },
  condition: {
    backgroundColor: PRIMARY_COLOR,
    padding: 15,
    marginVertical: 20,
    borderRadius: 4
  },
  conditionText: {
    color: BLACK_COLOR,
    fontSize: FONT_15,
    fontWeight: '500'
  },
  topSection: {
    backgroundColor: SECONDARY_COLOR,
    paddingTop: 20,
  },


  Wellcome: {
    fontWeight: '600',
    fontSize: FONT_24,
    color: WHITE_COLOR,
    marginBottom: 10,
    paddingTop: 10,
  },
  subHeading: {
    color: PRIMARY_COLOR,
    fontSize: 18,
    textTransform: 'none',
    fontWeight: '400',
  },

  text: {
    color: SECONDARY_COLOR,
    fontSize: 16,
    textTransform: 'none',
    fontWeight: '400',
    lineHeight: 22,
    width: '90%',
  },


  main: {
    position: 'relative',
    backgroundColor: WHITE_COLOR,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flex: 1,
    marginTop: -10
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 12,
    width: '80%',
  },
  appButtonText: {
    fontSize: 14,
    color: WHITE_COLOR,
    alignSelf: 'center',
    textTransform: 'none',
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  footerSection: {
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: 40,
    marginTop: 30,
    // minHeight: 170,
    width: '100%',
    paddingTop: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  page: {
    color: PRIMARY_COLOR,
    fontSize: FONT_14,
    fontWeight: '500'
  },
});
