import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
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
  FONT_17,
  ICON_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from '../constant/Color';
import Icon from 'react-native-vector-icons/AntDesign';
import Attachment from 'react-native-vector-icons/Entypo';
import { useForm } from 'react-hook-form';
import InspectionInput from '../compoments/InspectionInput';
import CustomButton from '../compoments/CustomButton';
import { Select, CheckIcon, Text, Radio } from 'native-base';
import Datepicker from '../compoments/Datepicker';
import * as ImagePicker from 'react-native-image-picker';

const UpdateTicketScreen = ({ navigation }) => {
  const [service, setService] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [selectedArt, setSelectedArt] = useState({});
  const [imageURL, setImageURL] = useState();
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

  const submit = data => {
    console.log(data);
  };

  const options = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: true,
    includeExtra: true,
  };

  const openGallery = React.useCallback(() => {
    ImagePicker.launchImageLibrary(options, setSelectedArt).then(res => {
      console.log(res);
      setImageURL(res.assets[0].base64);
    });
  }, []);
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
              <Text style={styles.Wellcome}>Work Order Update</Text>
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
                  optional={false}
                  keyboardType="email-address"
                  rules={{
                    required: 'Email is required.',
                  }}
                />
              </View>


              <View style={{ marginVertical: 10 }}>
                <InspectionInput
                  name="rnnumbers"
                  control={control}
                  placeholder="RM Issue Number"
                  label="RM Issue Number"
                  subLabel="If this purchase is not related is not related to an issue (like gas or tools) please use issue number 99"
                  optional={false}
                  keyboardType="email-address"
                  rules={{
                    required: 'RM Issue Number is required.',
                  }}
                />
              </View>

              <View style={{ marginVertical: 10 }}>
                <InspectionInput
                  name="tech"
                  control={control}
                  placeholder=""
                  label="Tech"
                  subLabel=""
                  optional={false}
                  keyboardType="email-address"
                  rules={{
                    required: 'Tech is required.',
                  }}
                />
              </View>

              <Datepicker title="Date Of Purchase" subLabel="Date" />
              <View style={{ marginVertical: 10 }}>
                <InspectionInput
                  name="jobName"
                  control={control}
                  placeholder=""
                  label="Job Name"
                  subLabel=""
                  optional={false}
                  keyboardType="email-address"
                  rules={{
                    required: 'Job Name is required.',
                  }}
                />
              </View>


              <View style={{ marginVertical: 15 }}>
                <InspectionInput
                  name="app"
                  control={control}
                  placeholder=""
                  keyboardType=""
                  optional={false}
                  label="Please describe course of action taken and any future follow up needed (if applicable) "
                  subLabel=""
                  rules={{
                    required: 'Course Taken is required.',
                  }}
                />
              </View>

              <View style={{ marginVertical: 15 }}>
                <InspectionInput
                  name="InternalNotes"
                  control={control}
                  placeholder=""
                  keyboardType=""
                  label="Internal Notes (Not visible to owner)"
                  optional={true}
                  subLabel=""
                  rules={false}
                />
              </View>

              <View style={{ marginVertical: 15 }}>
                <InspectionInput
                  name="totalLabour"
                  control={control}
                  placeholder=""
                  keyboardType=""
                  label="Total Labor Charged"
                  subLabel="Combine total hours for all techs i.e. 2 guys 8 hours = 16"
                  rules={{
                    required: 'Total Labor Charged is required.',
                  }}
                />
              </View>

              <Text style={[styles.Clean, { marginBottom: 10, marginTop: 20 }]}>Include Trip Charge </Text>
              <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
                <Radio colorScheme="gray" size="sm" value="1" my={2}>
                  <Text>Yes</Text>
                </Radio>
                <Radio value="2" colorScheme="gray" size="sm" my={2}>
                  <Text>No</Text>
                </Radio>
              </Radio.Group>


              <View style={{ marginVertical: 15 }}>
                <Text style={[styles.Clean, { marginBottom: 10, marginTop: 20 }]}>ITenant Responsibility </Text>
                <Select
                  borderColor={BORDER_COLOR}
                  height={50}
                  borderRadius={4}
                  selectedValue={service}
                  accessibilityLabel="Choose Service"
                  placeholder="Choose"
                  _selectedItem={{
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={itemValue => setService(itemValue)}>
                  <Select.Item label="UX Research" value="ux" />
                  <Select.Item label="Web Development" value="web" />
                  <Select.Item
                    label="Cross Platform Development"
                    value="cross"
                  />
                  <Select.Item label="UI Designing" value="ui" />
                  <Select.Item label="Backend Development" value="backend" />
                </Select>
              </View>


              <View>
                <Text style={[styles.Clean, { marginVertical: 20 }]}>
                  Attach Doc or Pic
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Pressable onPress={() => openGallery()}>
                    <View
                      style={{
                        width: 130,
                        height: 80,
                        marginRight: 10,
                        borderRadius: 10,
                        backgroundColor: PRIMARY_COLOR,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Attachment
                        name="attachment"
                        size={16}
                        color={BLACK_COLOR}
                      />

                      <Text
                        style={{
                          color: BLACK_COLOR,
                          fontSize: FONT_15,
                          marginHorizontal: 5,
                        }}>
                        Attach file
                      </Text>
                    </View>
                  </Pressable>
                  {Object.keys(selectedArt).length > 0 &&
                    selectedArt.assets && (
                      <Image
                        style={{
                          width: 130,
                          height: 80,
                          borderRadius: 10,
                          overflow: 'hidden',
                        }}
                        resizeMode="cover"
                        source={{ uri: `${selectedArt.assets[0].uri}` }}
                        alt="image"
                      />
                    )}
                </View>
              </View>

              <View style={{ marginVertical: 15 }}>
                <Text style={[styles.Clean, { marginBottom: 10, marginTop: 20 }]}>Job Status </Text>
                <Text style={styles.sublabel}>Update = in house follow up needed, Escalation = Escalate to outside vendor</Text>
                <Select
                  borderColor={BORDER_COLOR}
                  height={50}
                  borderRadius={4}
                  selectedValue={status}
                  accessibilityLabel="Choose Status"
                  placeholder="Choose"
                  _selectedItem={{
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={itemValue => setStatus(itemValue)}>
                  <Select.Item label="UX Research" value="ux" />
                  <Select.Item label="Web Development" value="web" />
                  <Select.Item
                    label="Cross Platform Development"
                    value="cross"
                  />
                  <Select.Item label="UI Designing" value="ui" />
                  <Select.Item label="Backend Development" value="backend" />
                </Select>
              </View>
            </View>

            <View style={{ marginVertical: 30 }}>
              <CustomButton onPress={handleSubmit(submit)} title="Submit" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateTicketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,

    backgroundColor: WHITE_COLOR,
    paddingTop: Platform.OS == 'ios' ? 0 : 35,
  },
  sublabel: {
    color: SECONDARY_COLOR,
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '400',
    lineHeight: 18
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
  Clean: {
    color: BLACK_COLOR,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
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
    paddingTop: 10
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
