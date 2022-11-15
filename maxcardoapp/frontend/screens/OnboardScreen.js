import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import BackgroundImage from '../compoments/BackgroundImage';
import InputField from '../compoments/InputField';
import { useForm, Controller } from 'react-hook-form';
import CustomButton from '../compoments/CustomButton';
import { LIGHT_TEXT_COLOR, WHITE_COLOR } from '../constant/Color';
const windowHeight = Dimensions.get('window').height;
const OnboardScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = data => {
    console.log(data);
    navigation.navigate('Register');
  };

  return (
    <BackgroundImage>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ alignItems: 'center', paddingVertical: 50 }}>
              <Image
                style={{ width: 160, height: 35 }}
                source={require('../../assets/images/logo.png')}
                alt="Logo Image"
              />
            </View>
            <View style={styles.loginForm}>
              <View>
                <View style={{ marginVertical: 10 }}>
                  <Text style={styles.heading}>Get started with</Text>
                  <Text style={styles.heading}>property management</Text>

                </View>
                <View style={{ marginVertical: 15 }}>
                  <Text style={styles.subHeading}>Helpdesk for requesting property </Text>
                  <Text style={styles.subHeading}>maintenance and service</Text>

                </View>

                <View style={{ marginBottom: 40, marginTop: 25 }}>
                  <CustomButton onPress={handleSubmit(submit)} title="Register" />
                </View>

                <View
                  style={{
                    textAlign: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 20
                  }}>
                  <Text style={styles.member}>Already have an account? </Text>
                  <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.forgotPassword}>Log in</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundImage >
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: 'space-between',
    height: windowHeight - 10,
  },
  forgotPassword: {
    color: WHITE_COLOR,
    fontSize: 15,
    textAlign: 'right',
  },
  subHeading: {
    color: WHITE_COLOR,
    fontSize: 15,
    textAlign: 'center',
  },
  heading: {
    color: WHITE_COLOR,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600'
  },
  member: {
    color: LIGHT_TEXT_COLOR,
    fontSize: 15,
    textAlign: 'right',
  },
});

export default OnboardScreen;
