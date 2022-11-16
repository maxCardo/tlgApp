import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input, Button, } from "native-base";
import Calendar from 'react-native-vector-icons/AntDesign';
import { BLACK_COLOR, SECONDARY_COLOR, WHITE_COLOR } from '../constant/Color';
import moment from 'moment';

const Datepicker = () => {
  const [date, setDate] = useState(new Date());
  const [newDate, setNewDate] = useState();
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setNewDate(selectedDate)
  };
  console.log(moment(date).format('l'))
  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>

      <Input isDisabled={true} w="100%" py="0" fontSize={16} color={SECONDARY_COLOR} InputRightElement={<Button w="1/6" height={50} bgColor={WHITE_COLOR} onPress={showDatepicker}>
        <Calendar name="calendar" size={24} color={BLACK_COLOR} />
      </Button>} placeholder="dd/mm/yyyy" value={moment(date).format('l')} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  )
}

export default Datepicker

const styles = StyleSheet.create({})