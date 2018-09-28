import * as enums from './Enums.js'

export default class AddressBookManager {
  
  constructor() {
    this.description = ''
    this.address = ''
    this.key = 2
    this.selectedDescription = ''
    this.selectedAddress = ''
    this.addressBook = [{key: "0", title: 'Starbucks', description: '455 Hidden Valleasdfy Pkwy, Norco, CA 92860'}, {key: "1", title: 'Home', description: '1290 Mira Valle St. Corona, CA 92879'}]
  }


  setDescription(description) {
  	this.description = description
  }

  getDescription() {
  	return this.description
  }

  setAddress(address) {
  	this.address = address
  }

  getAddress() {
  	return this.address
  }

  getAddressBook() {
  	return this.addressBook
  }

  setSelectedAddress(selectedAddress) {
    this.selectedAddress = selectedAddress
  }

  getSelectedAddress() {
    return this.selectedAddress
  }

  setSelectedDescription(selectedDescription) {
    this.selectedDescription = selectedDescription
  }

  getSelectedDescription() {
    return this.selectedDescription
  }

  add(description, address ) {
  	this.addressBook.push({key: this.key.toString(), title: description, description: address})
  	this.key++
  }



}



