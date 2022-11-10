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
const LoginScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const submit = data => {
    console.log(data);
    alert('Successfully logged in')
  };

  return (
    <BackgroundImage>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
              <Image
                style={{ width: 160, height: 35 }}
                source={require('../../assets/images/logo.png')}
                alt="Logo Image"
              />
            </View>
            <View style={styles.loginForm}>
              <View>
                <View style={{ marginVertical: 10 }}>
                  <InputField
                    name="username"
                    control={control}
                    label="Username or Email"
                    placeholder="john@example.com"
                    rules={{
                      required: 'Username or Email is required.',
                    }}
                  />
                </View>
                <View style={{ marginVertical: 10 }}>
                  <InputField
                    name="password"
                    control={control}
                    placeholder="Enter your password"
                    secureTextEntry
                    label="Password"
                    rules={{
                      required: 'Password is required.',
                      minLength: {
                        value: 8,
                        message: 'Password should be minimum 8 character long.',
                      },
                    }}
                  />
                </View>
                <View style={{ marginTop: 4 }}>
                  <Pressable onPress={() => navigation.navigate('Reset')}>
                    <Text style={styles.forgotPassword}>Forgot password</Text>
                  </Pressable>
                </View>

                <View style={{ marginBottom: 40, marginTop: 35 }}>
                  <CustomButton onPress={handleSubmit(submit)} title="Log in" />
                </View>

                <View
                  style={{
                    textAlign: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 20
                  }}>
                  <Text style={styles.member}>Not a member?</Text>
                  <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.forgotPassword}> Register now</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundImage>
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
  member: {
    color: LIGHT_TEXT_COLOR,
    fontSize: 15,
    textAlign: 'right',
  },
});

export default LoginScreen;
