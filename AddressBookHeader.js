import * as React from 'react';
import {CustomTextInput} from './CustomTextInput.js'
import {CustomButton} from './CustomButton.js'
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export class AddressBookHeader extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

	render() {
		return (

      <View style={{backgroundColor: "green", flex: 1}}>

        <CustomTextInput
          style = {styles.textInputContainer}
          visible = {true}
          placeholder = 'Description'
          onChangeText = {(text) => { 
            this.props.descriptionTextInputChanged(text)
          }} 
        />
        <CustomTextInput
          style = {styles.textInputContainer}
          visible = {true}
          placeholder = 'Address'
          onChangeText ={(text) => { 
            this.props.addressTextInputChanged(text)
          }} 
        />

        <CustomButton
          style = {styles.buttonContainer} 
          visible = {true}
          title = {"Add address"}
          onPress={() => { 
            this.props.addressButtonPressed()
          }} 
        />

      </View>








		)
	}

}




export const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    
  },

  textInput: {
    margin:0,
    fontSize: 16,
    textAlign: 'left', 
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'violet',
    justifyContent: 'center'

  },
});
