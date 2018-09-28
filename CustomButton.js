import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export class CustomButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      textAlign: this.props.textAlign

    }

  }

  render() {
    return (

      <View 
        style = {this.props.style} 
        opacity = {this.props.visible? 1 : 0}
      >
        

        <TouchableOpacity
          style={styles.button}
          disabled = {!this.props.visible}
          onPress={() => { 
            this.props.onPress()
          }} 
        >
          <Text style={{color: 'powderblue', fontSize: 16, textAlign: this.state.textAlign }}>{this.state.title}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'violet',
    justifyContent: 'center'

  },

  button: {
    flex: 1,
  },

  text: {
    color: 'powderblue', 
    fontSize: 16,
    textAlign: 'right', 
  },

});
