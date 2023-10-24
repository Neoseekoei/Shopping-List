import  {useState} from 'react'

import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

import AddItem from './components/Add'
import Display from './components/Display'

export default function App() {

const [items, setItems] = useState([
  {id: 1,
  shoppingItem:"Milk"} ,
  {
    id:2,
    shoppingItem:"BREAD"
   

  }
])


const addShoppingItem = ((text)=>{
  setItems((prevItems)=>{
    return[{id:3, shoppingItem:text}, ...prevItems]
  })
  

})

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Header}>Shoppinglist</Text>
    <AddItem  add= {addShoppingItem} items={items}  />
    <Display items={items} />
      
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  Header: {
    fontWeight:700,
    fontSize:30,
    alignItems: 'Center'
  }
});

