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
import Attachment from 'react-native-vector-icons/Entypo';
import { useForm } from 'react-hook-form';
import InspectionInput from '../compoments/InspectionInput';
import NextPrevButton from '../compoments/NextPrevButton';
import * as ImagePicker from 'react-native-image-picker';

const Inspection4 = ({ navigation }) => {
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


  const submitPrev = data => {
    navigation.push('Inspection3');
  };
  const submitNext = data => {
    navigation.push('Inspection5');
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
              <Text style={styles.Wellcome}>Move Out Inspection</Text>
              <Text style={styles.subHeading}>Other</Text>
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
                  label="Please Describe Any Other Damages Found In Unit"
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
                  optional={true}
                  keyboardType="numeric"
                  label="Estimated Labor Hours Needed For Other Work"
                  subLabel=""
                  rules={false}
                />
              </View>
              <View style={{ marginVertical: 15 }}>
                <InspectionInput
                  name="tech"
                  control={control}
                  placeholder=""
                  optional={true}
                  label="Estimated Cost Of Materials For"
                  subLabel=""
                  rules={false}
                />
              </View>
            </View>
            <View>
              <Text style={[styles.Clean, { marginBottom: 10, marginTop: 20 }]}>
                Attached Doc or Pic
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
            <View style={{ marginTop: 40, marginBottom: 20 }}>
              <NextPrevButton
                onPrev={handleSubmit(submitPrev)}
                onNext={handleSubmit(submitNext)}
                next="Next"
                prev="Back"
              />
              <View style={{ alignItems: 'center', marginVertical: 16 }}>
                <Text style={styles.page}>Page 4 of 6</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Inspection4;

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
  Clean: {
    color: BLACK_COLOR,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
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
