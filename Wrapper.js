import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export class WrapperComponent extends React.Component {
  

constructor(props) {
    super(props);


    this.opacity = 1
    this.editable = true
    this.placeholder = ''

    this.state = {
    	text: '',
    	id: this.props.id
    }
  }

 	makeInvisible() {
 		this.opacity = 0
    	this.editable = false
 	}
 	makeVisible() {
 		this.opacity = 1
    	this.editable = true
 	}

	setPlaceHolder(placeHolder) {
		this.placeHolder = placeholder
	}


	getText() {
		return this.state.text
	}





	render() {
		return (
		    <View 
		    	style = {styles.horizontalView}
		    	opacity = {this.props.visible? 1 : 0}
		    >
		    	{this.props.children}
				<TextInput
					placeholder = {this.props.placeholder}
					style={styles.textInput}
					opacity = {this.props.visible? 1 : 0}
					editable = {this.props.visible}

				
					onChangeText = {(text) => {
						this.props.parentFunction(text, this.state.id)
							
					}}
				/>
				
		    </View>
		)

	}

}




export const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'skyblue'
  },
  
  view1: {
    flex: .2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'blue',
  },
  
  view2: {
    flex: 1.5,
    alignItems: 'center',
    backgroundColor: 'purple'
  },

  view3: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'skyblue'
  },

  view3n1: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: "column",
    backgroundColor: 'darkgreen',
    justifyContent: 'center',
  },

  view3n2: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: "column",
    backgroundColor: 'lightgreen',
    justifyContent: 'center'
  },

  view4: {
    flex: 2.5,
    backgroundColor: 'pink',
    alignItems:'center',
  },

  horizontalView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'red',
    justifyContent: 'center'
  },

  textInput: {
    margin:0,
    fontSize: 16,

  },

});
