import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
      fetch ("https://58219900e01b45519b9c33691d594189.api.mockbin.io/")
          .then((response) => {
              return response.json();
          })
          .then((myJson) => {
              setMyData(myJson);
          })
  }, []);

  const renderItem = ({item, index, section}) => {
    return (
    <View style={styles.listStyle}>
    <Text>{item.name}</Text>
    </View>
    );
  };

   return (
    <View>
      <StatusBar/>
	  <Button title='Add Item' onPress={
      ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
