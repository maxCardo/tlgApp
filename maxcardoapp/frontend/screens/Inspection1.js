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
  FONT_14,
  FONT_15,
  FONT_24,
  ICON_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from '../constant/Color';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../compoments/CustomButton';
import { useForm } from 'react-hook-form';
import InspectionInput from '../compoments/InspectionInput';

const Inspection1 = ({ navigation }) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    // return () =>
    //   navigation.getParent()?.setOptions({
    //     tabBarStyle: {
    //       height: 70,
    //       position: 'absolute',
    //       bottom: 20,
    //       left: 40,
    //       right: 40,
    //       borderRadius: 6,
    //       backgroundColor: BLACK_COLOR,
    //     },
    //   });
  }, [navigation]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = data => {
    console.log(data);
    navigation.push('Inspection2');
  };
  return (
    <>
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
                    placeholder="Your email"
                    label="Email"
                    subLabel=""
                    keyboardType="email-address"
                    rules={{
                      required: 'Email is required.',
                      pattern: {
                        value:
                          /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/,
                        message: 'Invalid email address',
                      },
                    }}
                  />
                </View>
                <View style={{ marginVertical: 15 }}>
                  <InspectionInput
                    name="rmnumber"
                    control={control}
                    placeholder="RM Issue Number"
                    keyboardType="numeric"
                    label="RM Issue Number"
                    subLabel="Place RM Issue number above. Use 100 to open a new work order in the system"
                    rules={{
                      required: 'RM Issue Number  is required.',
                    }}
                  />
                </View>
                <View style={{ marginVertical: 15 }}>
                  <InspectionInput
                    name="tech"
                    control={control}
                    placeholder="Enter tech"
                    label="Tech"
                    subLabel=""
                    rules={{
                      required: 'Tech  is required.',
                    }}
                  />
                </View>
              </View>

              <View style={{ marginTop: 50 }}>
                <CustomButton onPress={handleSubmit(submit)} title="Continue" />
                <View style={{ alignItems: 'center', marginVertical: 16 }}>
                  <Text style={styles.page}>Page 1 of 6</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Inspection1;

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
