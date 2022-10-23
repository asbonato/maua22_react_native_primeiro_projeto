import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <Button title="Alterar Texto" 
              onPress={() => {setContador(contador + 1)}}/>
    </View>
  );
} 

/* export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0
    }
  }
  render(){
    return (
      <View style={styles.container}>
      <Text>{this.state.contador}</Text>
      <Button 
        title="Alterar Texto" 
        onPress={() => {this.setState({contador: this.state.contador + 1})}}
      />
    </View>
    );
  }
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
