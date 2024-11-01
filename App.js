import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp =() => {
  // let pw='';
  const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
  return (
      <View style={{ padding: 20, paddingTop: 50 }}>

        {/*Exercise 1B*/}
        {/*<Text>User type:</Text>*/}
        {/*<RNPickerSelect onValueChange={(value) => console.log(value)} items={[*/}
        {/*  { label: 'Admin', value: 'Admin' },*/}
        {/*  { label: 'Guest', value: 'Guest' },*/}
        {/*]}*/}
        {/*/>*/}

        {/*Exercise 1A*/}
        {/*<Text>Password:</Text>*/}
        {/*<TextInput style={{borderWidth: 1}}/>*/}

        {/*Exercise 1C and 1D*/}
        {/*<Button title="LOG IN" onPress={() => Alert.alert(`Another Thing!`)}/>*/}

        {/*Exercise 1E*/}
        {/*<TouchableOpacity onPress={() => Alert.alert("Welcome!")}>*/}
        {/*  <Text>Submit Answers</Text>*/}
        {/*</TouchableOpacity>*/}

        {/*Exercise 1F*/}
        {/*<TouchableOpacity onPress={() => ToastAndroid.show("Welcome!",*/}
        {/*    ToastAndroid.SHORT)}>*/}
        {/*  <Text>LOG IN</Text>*/}
        {/*</TouchableOpacity>*/}

        {/*Exercise 1G*/}
          <RNPickerSelect
              onValueChange={(value) => setType(value)}
              items={[
                  { label: 'Admin', value: 'Admin' }, { label:
                          'Guest', value: 'Guest' },
              ]}
          />
          <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
          <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>
          <TouchableOpacity onPress={()=>
              ToastAndroid.show('Welcome ' + type + ' ' + name, ToastAndroid.SHORT)}>
              <Text>LOG IN</Text>
          </TouchableOpacity>
          <Text>{pw}</Text>

      </View>
  );
}

export default MyApp;
