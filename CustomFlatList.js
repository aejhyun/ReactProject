import * as React from 'react';
import {CustomButton} from './CustomButton.js'
import Swipeout from 'react-native-swipeout';
import { Alert, View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export class CustomFlatList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }

    this.swipeoutBtns = [
      {
        
        text: 'Delete',
        backgroundColor: "blue",
        onPress: this.blah()
        
      },
      {
        text: 'Use'
        
      }
    ]
  }

  blah() {
    alert('Yo text is copied home slice');
  }

	render() {
		return (


      <View style={{flex: 3 }}>



        <FlatList
          style={{backgroundColor: "steelblue", flex: 3}}
          data={this.props.data}
          renderItem={({item, separators}) => (

            <TouchableOpacity
              onPress={(selected) => { 
                this.props.onPress(item)
              }} 
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              


              <View style={{backgroundColor: 'white'}}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <CustomButton
                  style={{backgroundColor: "blueviolet", width: 80}}
                  visible = {true}
                  title = {"Create"}
                  textAlign = {"center"}
                  onPress = {() => { 
                    this.blah()
                  }} 


                  
                />

              </View>


            </TouchableOpacity>
          )}
        />
      </View>

		)
	}

}




export const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    backgroundColor: 'powderblue',
    
  },

  textInput: {
    margin:0,
    fontSize: 16,
    textAlign: 'left', 
  },
});
