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
import { Controller, useForm } from 'react-hook-form';
import CustomCheckbox from '../compoments/CustomCheckbox';
import CustomTextarea from '../compoments/CustomTextarea';
import NextPrevButton from '../compoments/NextPrevButton';

import { Radio, } from "native-base";

const Inspection3 = ({ navigation }) => {
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
    navigation.push('Inspection2')
  };
  const submitNext = data => {
    navigation.push('Inspection4')
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
                Walls & Flooring
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={{ paddingHorizontal: 40, marginTop: 20 }}>
            <View style={{ marginVertical: 20 }}>
              <Text style={[styles.Clean, { marginBottom: 0 }]}>Walls Condition</Text>
            </View>
            <CustomCheckbox label='Good condition, no signs of damage' state={open} setState={setOpen} />
            <CustomCheckbox label='Some scratches, basic touch ups (normal wear and tear)' state={open} setState={setOpen} />
            <CustomCheckbox label='Full paint, damage beyond normal wear and tear up to 25% of walls' state={open} setState={setOpen} />
            <CustomCheckbox label='Extra paint/prime coat needed (dark walls, smoke stains, etc.)' state={open} setState={setOpen} />
            <CustomCheckbox label='Limited patching required (1-3 holes size of a baseball or smaller)' state={open} setState={setOpen} />
            <CustomCheckbox label='Heavy drywall damage repair/replacement up to 25% of total square feet of unit' state={open} setState={setOpen} />
            <CustomCheckbox label='Wall damage greater than above list (please provide details in notes)' state={open} setState={setOpen} />



            <Text style={[styles.Clean, { marginBottom: 10 }]}>Drywall Notes</Text>
            <CustomTextarea
              name="tech"
              multiline={true}
              numberOfLines={4}
              control={control}
              label=""
              subLabel=""
              optional={true}
            />

            <Text style={[styles.Clean, { marginBottom: 10, marginTop: 20 }]}>Carpet Condition</Text>
            <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="Pick your favorite number">
              <Radio colorScheme="gray" size="sm" value="1" my={2}>
                <Text>Good condition, no signs of damage</Text>
              </Radio>
              <Radio value="2" colorScheme="gray" size="sm" my={2}>
                <Text>Carpet cleaning required but otherwise good condition</Text>
              </Radio>
              <Radio value="3" colorScheme="gray" size="sm" my={2}>
                <Text>Carpet cleaning + stain treatment needed</Text>
              </Radio>
              <Radio value="4" colorScheme="gray" size="sm" my={2}>
                <Text>Carpet is damaged, replacement needed</Text>
              </Radio>
            </Radio.Group>

            <View style={{ marginBottom: 10, marginTop: 20 }}>
              <CustomTextarea
                name="tech"
                multiline={true}
                numberOfLines={4}
                control={control}
                label="Square Footage of Carpeted Area"
                subLabel="If replacement required"
                optional={true}
              />
            </View>

            <Text style={[styles.Clean, { marginBottom: 10, marginTop: 20 }]}>Other Flooring Condition</Text>
            <Radio.Group defaultValue="1" name="myRadioGroup1" accessibilityLabel="Pick your favorite number">
              <Radio colorScheme="gray" size="sm" value="1" my={2}>
                <Text>Move in condition</Text>
              </Radio>
              <Radio value="2" colorScheme="gray" size="sm" my={2}>
                <Text>Moderately damage repairs required</Text>
              </Radio>
              <Radio value="3" colorScheme="gray" size="sm" my={2}>
                <Text>Heavy damage: replacement needed</Text>
              </Radio>
            </Radio.Group>

            <View style={{ marginBottom: 10, marginTop: 20 }}>
              <CustomTextarea
                name="tech"
                multiline={true}
                numberOfLines={4}
                control={control}
                label="Notes: Flooring"
                subLabel=""
                optional={true}
              />
            </View>

            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <NextPrevButton onPrev={handleSubmit(submitPrev)} onNext={handleSubmit(submitNext)} next="Next" prev="Back" />
              <View style={{ alignItems: 'center', marginVertical: 16 }}>
                <Text style={styles.page}>Page 3 of 6</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Inspection3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: WHITE_COLOR,
    paddingTop: Platform.OS == 'ios' ? 0 : 35,
  },
  Clean: {
    color: BLACK_COLOR,
    fontSize: 16,
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
