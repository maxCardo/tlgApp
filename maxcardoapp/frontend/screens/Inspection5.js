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
import React, { useEffect } from 'react';
import {
  BACKGROUND_COLOR,
  BLACK_COLOR,
  BORDER_COLOR,
  ERROR_COLOR,
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
import { useForm } from 'react-hook-form';
import InspectionInput from '../compoments/InspectionInput';

import { Select, CheckIcon, } from "native-base";
import NextPrevButton from '../compoments/NextPrevButton';

const Inspection5 = ({ navigation }) => {
  const [service, setService] = React.useState("");
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });

  }, [navigation]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const submitPrev = data => {
    navigation.push('Inspection4');
  };
  const submitNext = data => {
    navigation.push('Inspection6');
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
                <Pressable onPress={() => navigation.goBack()}>
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
                Make sure each item inside the entry area has been inspected
                thoroughly. Leave comments for all defects.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={{ paddingHorizontal: 40, marginTop: 20 }}>
            <View>
              <View style={{ marginVertical: 10 }}>
                <InspectionInput
                  name="email"
                  control={control}
                  placeholder=""
                  label="Track your time spent on inspection"
                  subLabel=""
                  optional={true}
                  keyboardType="email-address"
                  rules={false}
                />
              </View>
              <View style={{ marginVertical: 15 }}>
                <InspectionInput
                  name="rmnumber"
                  control={control}
                  placeholder=""
                  keyboardType="numeric"
                  label="Total Labor "
                  subLabel="Combine total hours for all techs i.e. 2 guys 8 hours = 16"
                  rules={{
                    required: 'Total Labor is required.',
                  }}
                />
              </View>
              <View style={{ marginVertical: 15 }}>
                <Text style={styles.label}>Method Of Purchase </Text>
                <Select borderColor={BORDER_COLOR}
                  height={50}
                  borderRadius={4} selectedValue={service} accessibilityLabel="Choose Service" placeholder="Choose" _selectedItem={{

                    endIcon: <CheckIcon size="5" />
                  }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                  <Select.Item label="UX Research" value="ux" />
                  <Select.Item label="Web Development" value="web" />
                  <Select.Item label="Cross Platform Development" value="cross" />
                  <Select.Item label="UI Designing" value="ui" />
                  <Select.Item label="Backend Development" value="backend" />
                </Select>
              </View>
            </View>

            <View style={{ marginTop: 40, marginBottom: 20 }}>
              <NextPrevButton
                onPrev={handleSubmit(submitPrev)}
                onNext={handleSubmit(submitNext)}
                next="Next"
                prev="Back"
              />
              <View style={{ alignItems: 'center', marginVertical: 16 }}>
                <Text style={styles.page}>Page 5 of 6</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Inspection5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,

    backgroundColor: WHITE_COLOR,
    paddingTop: Platform.OS == 'ios' ? 0 : 35,
  },
  topSection: {
    backgroundColor: SECONDARY_COLOR,
    paddingTop: 20,
  },
  label: {
    color: BLACK_COLOR,
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '500'
  },
  centerIcon: {
    width: '33%',
    borderRightWidth: 0.3,
    borderRightColor: BORDER_COLOR,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 16,
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
  map: {
    color: BLACK_COLOR,
    fontSize: 16,
    textTransform: 'none',
    fontWeight: '600',
  },
  text: {
    color: SECONDARY_COLOR,
    fontSize: 16,
    textTransform: 'none',
    fontWeight: '400',
    lineHeight: 22,
    width: '90%',
  },
  textFooter: {
    color: SECONDARY_COLOR,
    fontSize: 16,
    textTransform: 'none',
    fontWeight: '400',
    lineHeight: 22,
    width: '100%',
  },
  contactSection: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: BLACK_COLOR,
    borderRadius: 4,
    paddingVertical: 16,
  },
  contactSection2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 4,
    top: -27,
  },
  main: {
    position: 'relative',
    backgroundColor: WHITE_COLOR,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flex: 1,
    marginTop: -10,
  },
  contactUs: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 60,
  },
  contactUsbtn: {
    width: '32%',
    alignItems: 'center',
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
    fontWeight: '500',
  },
});
