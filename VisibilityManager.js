import * as enums from './Enums.js'

export default class VisibilityManager {
  
  constructor() {
  	this.candidateName = true
    this.myName = true
    this.location = true
    this.time = true
    this.day = true
    this.address = true
    this.speakerName = true
  }

   setAllToFalse() {
  	this.candidateName = false
    this.myName = false
    this.location = false
    this.time = false
    this.day = false
    this.address= false
    this.speakerName = false
  }

  setVisibility(textMessageType) {
  	this.setAllToFalse()
  	switch (textMessageType) {
      case enums.TextMessageType.CONFIRM_PHONE_NUMBER:
        this.candidateName = true
        this.myName = true
        this.location = true
        break
      case enums.TextMessageType.CHECK_AVAILABILITY:
    		this.candidateName = true
    		break
      case enums.TextMessageType.SETUP_MG1:
  	    this.candidateName = true
  	    this.time = true
  	    this.day = true
  	    break
      case enums.TextMessageType.PRE_CONFIRM_MG1:
        this.candidateName = true
        break
      case enums.TextMessageType.CONFIRM_MG1:
        this.candidateName = true
  	    this.time = true
  	    this.day = true
  	    this.location = true
  	    this.address = true
  	    break
      case enums.TextMessageType.BOOK_FINISHED:
      	this.candidateName = true
        break
      case enums.TextMessageType.BOOK_NOT_FINISHED:
      	this.candidateName = true
      	this.day = true
        break
      case enums.TextMessageType.CONFIRM_MG2:
        this.time = true
        this.day = true
        break
      case enums.TextMessageType.CONFIRM_BP1:
        this.candidateName = true
        this.address = true
        this.day = true
        this.speakerName = true
        break
      case enums.TextMessageType.CONFIRM_BP2:
        this.candidateName = true
        this.address = true
        this.day = true
        this.speakerName = true
        break
      case enums.TextMessageType.DUE_DILIGENCE:
        this.candidateName = true
        this.time = true
        this.day = true
        break
      case enums.TextMessageType.NO_RESPONSE:
        this.candidateName = true
        this.myName = true
        this.day = true
        break
    }
  }





}



