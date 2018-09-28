import * as React from 'react';
import * as enums from './Enums.js'

import TextMessageCreator from './TextMessageCreator.js'
import VisibilityManager from './VisibilityManager.js'
import AddressBookManager from './AddressBookManager.js'

import {CustomTextInput} from './CustomTextInput.js'
import {CustomButton} from './CustomButton.js'
import {CustomFlatList} from './CustomFlatList.js'
import {CustomModal} from './CustomModal.js'
import {AddressBookHeader} from './AddressBookHeader.js'


import { Alert, Button, Clipboard, Dimensions, FlatList, Modal, Picker, Text, TextInput, TouchableHighlight, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Constants, SMS } from 'expo';
import SendSMS from 'react-native-sms'
import Communications from 'react-native-communications';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.creator = new TextMessageCreator()
    
    this.visibilityManager = new VisibilityManager()
    this.visibilityManager.setVisibility(enums.TextMessageType.CONFIRM_BP1)

    this.addressBookManager = new AddressBookManager()

    this.state = {

      selectedAddress: '',
      // addressBook: [{key: '0', title: 'Starbucks', description: '455 Hidden Valleasdfy Pkwy, Norco, CA 92860'}, {key: '1', title: "home", description: '1290 Mira Valle St. Corona, CA 92879'}],
      textMessageTypeValue: enums.TextMessageType.CONFIRM_PHONE_NUMBER,
      
      textMessage: this.creator.createTextMessage(enums.TextMessageType.CONFIRM_PHONE_NUMBER),

      modalVisible: false,


      
    };
 
    
  }

  createTextMessageButtonPressed = (value) =>  {
    Communications.text('9512331991', this.state.textMessage)


    // const isAvailable = SMS.isAvailableAsync();
    // if (isAvailable) {
    //   SMS.sendSMSAsync([], this.state.textMessage);
    // } else {
    //   // misfortune... there's no SMS available on this device
    // }
   
  }

  test() {

  }

  textInputChanged(text, textMessageInfoType) {

    
    this.creator.setTextMessageInfoValue(text, textMessageInfoType)
    this.setState({textMessage: this.creator.createTextMessage(this.state.textMessageTypeValue)})
  } 



  pickerChanged(itemValue, itemIndex) {

    this.setState({ 
      textMessageTypeValue: itemValue, 
      textMessage: this.creator.createTextMessage(itemValue) + this.addressBookManager.description + this.addressBookManager.address,

    })
    this.visibilityManager.setVisibility(itemValue)
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.textMessage);
    alert('Yo text is copied home slice');

  }

test() {

}


  
  render() {
    return (








      <View style = {styles.parentView}>

        <Modal 
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          presentationStyle = "overFullScreen"
        
          >
          <View style={{backgroundColor: "skyblue", flex: 1, flexDirection: 'column'}}>

            <View style={{backgroundColor: "powderblue", flex: 1, marginTop: 35}}>
              
              <CustomButton
                style = {styles.buttonContainer} 
                visible = {true}
                title = {'Hide Modal View'}
                onPress = {() => { 
                  this.setModalVisible(!this.state.modalVisible);
                }} 
              />

              <AddressBookHeader
                descriptionTextInputChanged = {(text) => this.addressBookManager.setDescription(text)}
                addressTextInputChanged = {(text) => this.addressBookManager.setAddress(text)}
                addressButtonPressed = {() => { 
                  this.addressBookManager.add(this.addressBookManager.getDescription(), this.addressBookManager.getAddress())
                  this.setState({addressBook: this.addressBookManager.getAddressBook()})
                }} 
              />

              <CustomFlatList
                data = {this.addressBookManager.getAddressBook()}
                onPress = {(item) => { 
                  this.addressBookManager.setSelectedAddress(item.description)
                  this.creator.address = item.description
                  this.setState({textMessage: this.creator.createTextMessage(this.state.textMessageTypeValue)})
                  this.setModalVisible(!this.state.modalVisible);
                }}
                deleteButtonPressed = {this.test()}
              />





              

            </View>

          </View>

        </Modal>





        <View style = {styles.view1}>
          
        </View>

        <View style = {styles.view2}>

          <TextInput
            style={{ flex: 2, fontSize: 16 }}
            multiline = {true}
            placeholder="The text message..."
          >
          {this.state.textMessage}
          </TextInput>


          <View style={{flex: 0.7, backgroundColor: "burlywood", flexDirection: "row"}}>
            <CustomButton
              style={{backgroundColor: "blueviolet", width: 80}}
              visible = {true}
              title = {"Create"}
              textAlign = {"center"}
              onPress = 
                {this.createTextMessageButtonPressed}
            />
            <CustomButton
              style={{backgroundColor: "blueviolet", width: 80}}
              visible = {true}
              title = {"Copy"}
              textAlign = {"center"}
              onPress = 
                {this.writeToClipboard}
            />
              
          </View>

          







        
        </View>


        <View style = {styles.view3}>



            


          
          <View style = {styles.view3n1}>

            <CustomButton
              style = {styles.buttonContainer}
              visible = {this.visibilityManager.candidateName}
              title = {enums.TextMessageInfoType.CANDIDATE_NAME + ":"}
              textAlign = {"right"}
              onPress = {() => { 
                this.setModalVisible(true)
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.myName}
              title = {enums.TextMessageInfoType.MY_NAME + ":"}
              textAlign = {"right"}
              onPress = {() => { 
     
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.location}
              title = {enums.TextMessageInfoType.LOCATION + ":"}
              textAlign = {"right"}
              onPress = {() => { 
      
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.time}
              title = {enums.TextMessageInfoType.TIME + ":"}
              textAlign = {"right"}
              onPress = {() => { 
           
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.day}
              title = {enums.TextMessageInfoType.DAY + ":"}
              textAlign = {"right"}
              onPress = {() => { 
           
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.address}
              title = {enums.TextMessageInfoType.ADDRESS + ":"}
              textAlign = {"right"}
              onPress = {() => { 
 
              }} 
            />

            <CustomButton
              style = {styles.buttonContainer} 
              visible = {this.visibilityManager.speakerName}
              title = {enums.TextMessageInfoType.SPEAKER_NAME + ":"}
              textAlign = {"right"}
              onPress = {() => { 

              }} 
            />

          </View>

          



          <View style = {styles.view3n2}>

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.candidateName}
              id = {enums.TextMessageInfoType.CANDIDATE_NAME}
              placeholder = "Candidate's Name"
              onChangeText ={(text, id) => this.textInputChanged(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.myName}
              id = {enums.TextMessageInfoType.MY_NAME}
              placeholder = "My Name"
              onChangeText ={(text, id) => this.textInputChanged(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.location}
              id = {enums.TextMessageInfoType.LOCATION}
              placeholder = "Location"
              onChangeText ={(text, id) => this.textInputChanged(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.time}
              id = {enums.TextMessageInfoType.TIME}
              placeholder = "Time"
              onChangeText ={(text, id) => this.textInputChanged(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.day}
              id = {enums.TextMessageInfoType.DAY}
              placeholder = "Day"
              onChangeText ={(text, id) => this.textInputChanged(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.address}
              id = {enums.TextMessageInfoType.ADDRESS}
              value = {this.addressBookManager.getSelectedAddress()}
              placeholder = "Address"
              onChangeText ={(text, id) => this.textInputChanged(text, id)}
            />

            <CustomTextInput
              style = {styles.textInputContainer} 
              visible = {this.visibilityManager.speakerName}
              id = {enums.TextMessageInfoType.SPEAKER_NAME}
              placeholder = "Speaker's Name"
              onChangeText ={(text, id) => this.textInputChanged(text, id)}
            />


          </View>

        </View>








        <View style = {styles.view4}>

          <Picker
            selectedValue={this.state.textMessageTypeValue}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) => {
              this.pickerChanged(itemValue, itemIndex)
            }}>
            <Picker.Item label="Confirm Phone #" value={enums.TextMessageType.CONFIRM_PHONE_NUMBER} />
            <Picker.Item label="Availability?" value={enums.TextMessageType.CHECK_AVAILABILITY} />
            <Picker.Item label="Setup MG1" value={enums.TextMessageType.SETUP_MG1} />
            <Picker.Item label="Pre-Confirm MG1" value={enums.TextMessageType.PRE_CONFIRM_MG1} />
            <Picker.Item label="Confirm MG1" value={enums.TextMessageType.CONFIRM_MG1} />
            <Picker.Item label="Book Finished" value={enums.TextMessageType.BOOK_FINISHED} />
            <Picker.Item label="Book Not Finished" value={enums.TextMessageType.BOOK_NOT_FINISHED} />
            <Picker.Item label="Confirm MG2" value={enums.TextMessageType.CONFIRM_MG2} />
            <Picker.Item label="Confirm BP1" value={enums.TextMessageType.CONFIRM_BP1} />
            <Picker.Item label="Due Diligence" value={enums.TextMessageType.DUE_DILIGENCE} />
            <Picker.Item label="Confirm BP2" value={enums.TextMessageType.CONFIRM_BP2} />
            <Picker.Item label="No Response" value={enums.TextMessageType.NO_RESPONSE} />
            <Picker.Item label="Other..." value={enums.TextMessageType.OTHER} />
          </Picker>

        </View>

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
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'purple'
  },

  view3: {
    flex: 2.5,
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
    flex: 2.3,
    backgroundColor: 'lightgray',
    alignItems:'center',
  },

  textInputContainer: {
    flex: 1,
    backgroundColor: 'powderblue',
    
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

  button: {
    flex: 1,
  },

  text: {
    color: 'powderblue', 
    fontSize: 16,
    textAlign: 'right', 
   
  },



});





