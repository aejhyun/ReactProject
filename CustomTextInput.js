import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export class CustomTextInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	id: this.props.id,
      textAlign: this.props.textAlign
    }
    
  }

	render() {
		return (
	    <View 
	    	style = {this.props.style}
	    	opacity = {this.props.visible? 1 : 0}
	    >
  	
  			<TextInput
  				placeholder = {this.props.placeholder}
  				style={{ margin:0, fontSize: 16, textAlign: this.state.textAlign }}
  				opacity = {this.props.visible? 1 : 0}
  				editable = {this.props.visible}
          value = {this.props.value}
          multiline = {this.props.multiline}
  				onChangeText = {(text) => {
  					this.props.onChangeText(text, this.state.id)
  				}}
  			/>
		  </View>
		)
	}

}




export const styles = StyleSheet.create({

  textInput: {
    margin:0,
    fontSize: 16,
    textAlign: 'left', 
  },
});
