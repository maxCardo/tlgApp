import {
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

const TicketDetailScreen = ({ navigation }) => {
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
          backgroundColor: BLACK_COLOR,
        },
      });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={SECONDARY_COLOR}
        barStyle="light-content"
      />
      <ScrollView>
        <View style={[styles.topSection]}>
          <View style={{ paddingHorizontal: 40 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <View>
                <Pressable onPress={() => navigation.goBack()}>
                  <Icon name="left" size={24} color={WHITE_COLOR} />
                </Pressable>
                <Text style={styles.Wellcome}>Ticket 405-1</Text>
                <Text style={styles.subHeading}>In progress</Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/images/person.png')}
                  alt="tab icon"
                />
              </View>
            </View>
            <View style={styles.contactSection}>
              <View style={styles.centerIcon}>
                <Phone name="phone-call" size={28} color={ICON_COLOR} />
              </View>
              <View style={styles.centerIcon}>
                <Envelope name="envelope" size={40} color={ICON_COLOR} />
              </View>
              <View style={{ width: '33%', alignItems: 'center' }}>
                <Message name="message1" size={30} color={ICON_COLOR} />
              </View>
            </View>
            <View style={styles.contactUs}>
              <Text style={styles.subHeading}>Contact Technician</Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={{ paddingHorizontal: 40, }}>
            <View style={styles.contactSection2}>
              <View style={styles.contactUsbtn}>
                <CustomButton title="Close" />
              </View>
              <View style={styles.contactUsbtn}>
                <CustomButton title="Update" />
              </View>
              <View style={styles.contactUsbtn}>
                <CustomButton title="Delete" />
              </View>
            </View>
            {/* Detail section */}

            <View>
              <View style={styles.row}>
                <View style={{ width: '15%' }}>
                  <Image
                    source={require('../../assets/images/map.png')}
                    alt="tab icon"
                    style={{ width: 15, height: 21 }}
                  />
                </View>
                <View style={{ width: '80%', flexDirection: 'row' }}>
                  <Text style={styles.map}>123 Building </Text>
                  <Text style={styles.text}>(123 West area St)</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={{ width: '15%' }}>
                  <Image
                    source={require('../../assets/images/description.png')}
                    alt="tab icon"
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                  <Text style={styles.text} numberOfLines={3}>
                    The leak isn’t happening anymore but if you could still come
                    byThe leak isn’t happening anymore but if you could still
                    come byThe leak isn’t happening anymore but if you could
                    still come byThe leak isn’t happening anymore but if you
                    could still come byThe leak isn’t happening anymore but if
                    you could still come by and check it. The leak isn’t
                    happening anymore but if you read more{' '}
                  </Text>
                </View>
              </View>

              <View style={[styles.row, { alignItems: 'center' }]}>
                <View style={{ width: '15%' }}>
                  <Image
                    source={require('../../assets/images/tag.png')}
                    alt="tab icon"
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                  <Pressable style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>
                      HVAC / REPAIR & MAINTENANCE
                    </Text>
                  </Pressable>
                </View>
              </View>

              <View style={[styles.row]}>
                <View style={{ width: '15%' }}>
                  <Image
                    source={require('../../assets/images/camra.png')}
                    alt="tab icon"
                    style={{ width: 22, height: 19 }}
                  />
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                  <Image
                    source={require('../../assets/images/person.png')}
                    alt="tab icon"
                    resizeMode="cover"
                    style={{ height: 90, width: 120, borderRadius: 12 }}
                  />
                  <Image
                    source={require('../../assets/images/person.png')}
                    alt="tab icon"
                    resizeMode="cover"
                    style={{ height: 90, width: 120, borderRadius: 12 }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.footerSection}>
            <View>
              <View style={styles.row}>
                <View style={{ width: '18%' }}>
                  <Image
                    source={require('../../assets/images/person.png')}
                    alt="tab icon"
                  />
                </View>
                <View style={{ width: '85%' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.map}>Helen C. Daniels </Text>
                    <Text style={styles.text}>(technician)</Text>
                  </View>
                  <View>
                    <Text numberOfLines={3} style={styles.textFooter}>
                      <Text style={styles.map}>@heather </Text> I’m waiting for
                      the delivery of a part I need to complete the fix. I’m
                      waiting for the delivery of a part I need to complete the
                      fix. I’m waiting for the delivery of a part I need to
                      complete the fix. I’m waiting for the delivery of a part I
                      need to complete the fix. I’m waiting for the delivery of
                      a part I need to complete the fix. I’m waiting for the
                      delivery of a part I need to complete the fix. I’m waiting
                      for the delivery of a part I need to complete the fix.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TicketDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    paddingTop: Platform.OS == 'ios' ? 0 : 35,
    backgroundColor: BACKGROUND_COLOR,
  },
  topSection: {
    backgroundColor: SECONDARY_COLOR,
    // minHeight: '33%',
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
    marginTop: 10,
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
    // minHeight: '73%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    // paddingHorizontal: 40,
    marginTop: -10
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
});
