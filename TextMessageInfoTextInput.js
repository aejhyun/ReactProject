import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export class TextMessageInfoTextInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	id: this.props.id
    }
  }

	render() {
		return (
	    <View 
	    	style = {styles.textInputContainer}
	    	opacity = {this.props.visible? 1 : 0}
	    >
  	
  			<TextInput
  				placeholder = {this.props.placeholder}
  				style={styles.textInput}
  				opacity = {this.props.visible? 1 : 0}
  				editable = {this.props.visible}
  				onChangeText = {(text) => {
  					this.props.onChangeText(text, this.state.id)
  				}}
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
