import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({navigation, route}) => {
  const[name,setName] = useState("");

  return (
    <View>
      <StatusBar/>
      <Text>Name:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
      <Button title='Submit'
      onPress={()=> {
          let mydata = JSON.parse(route.params.datastr);
          let item = {name: name};
          mydata.push(item);
          fetch('https://58219900e01b45519b9c33691d594189.api.mockbin.io/',
              {
                  method: 'POST',
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": "123456"
                  },
                  body: JSON.stringify(mydata)
              }
        )
                  .then((response) => {
                      navigation.navigate('Home');
                  })
        }
      }
      />
    </View>
  );
};

export default Add;
