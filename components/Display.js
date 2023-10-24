import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

const Display = (props) => {
  const [name, setName] = useState('Neo');

  return (
    <View>
    

      
        {props.items.map((item) => (
          <View style={styles.mainContainer}>
           
              <Text style={styles.king}>{item.shoppingItem}
            

            <TouchableOpacity style={styles.deleteButton}>
              {' '}
              <Text> X </Text>{' '}
            </TouchableOpacity> </Text>
          </View>
        ))}
      
    </View>
  );
};
const styles = StyleSheet.create({
  king: {
    backgroundColor: '#FAEDCD',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 20,
    fontWeight: 500,
    fontSize: 14,
    marginRight: 55,
    paddingLeft: 25,
  },

  deleteButton: {
    borderWidth: 1,
    margin: 12,
    backgroundColor: '#FA9884',
    borderRadius: 10,
    paddingLeft: 9,
    width:35,
    marginLeft:150,
    
  },

 
});

export default Display;
