import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Text&family=Karla:wght@400;700&display=swap');
</style>

const AddItem = (props) => {
  const [text, setText] = useState();

  const addToShoppingList = () => {
    props.add(text);
  };

  const onChangehandleChange = (textValue) => {
    setText(textValue);
  };

 


  return (
    <View>
      <TextInput placeholder="Enter add" style={styles.Enter} onChangeText={onChangehandleChange} />
       
      <TouchableOpacity style={styles.btn} onPress={addToShoppingList}>
        <Text>Add </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#E9EDC9',
    width: 100,
    height: 30,
    padding: 9,
    color: 'white',
    marginTop:23,
    marginBottom:23,
    textAlign: 'Center',
    paddingBottom:27,
    marginLeft:23,
    borderRadius:8,

  },
  Enter: {
    backgroundColor: '#CCD5AE',
    borderWidth:2,
    padding:5,
    borderRadius:5,
    width:220
   
  }
});



export default AddItem;
