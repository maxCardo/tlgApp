import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { WHITE_COLOR } from '../constant/Color';
import InputField from '../compoments/InputField';
import { useForm } from 'react-hook-form';
import Transaction from '../compoments/Transaction';

const HomeScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ScrollView>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <View>
                <Text>Hello John,</Text>
                <Text>Welcome back!</Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/images/person.png')}
                  alt="tab icon"
                />
              </View>
            </View>
            <View style={{ position: 'relative', marginBottom: 20 }}>
              <View style={{ position: 'absolute', top: 16, left: 16 }}>
                <Image
                  style={{ width: 25, height: 20 }}
                  source={require('../../assets/images/filterIcon1.png')}
                  alt="tab icon"
                />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Search..."
                keyboardType="numeric"
              />
              <View style={{ position: 'absolute', top: 16, right: 16 }}>
                <Image
                  style={{ width: 25, height: 20 }}
                  source={require('../../assets/images/filterIcon1.png')}
                  alt="tab icon"
                />
              </View>
            </View>
            <Text>TICKETS DUE THIS WEEK (2)</Text>
            <View style={{ backgroundColor: 'gray', height: 150 }} />
            <Text>View all Opened Tickets </Text>
            <Text>RECENT TRANSACTIONS</Text>

            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    paddingHorizontal: 40,
    paddingTop: Platform.OS == 'ios' ? 0 : 35,
  },

  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgb(181, 188, 194)',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
});
