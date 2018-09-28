import * as React from 'react';
import { Modal} from 'react-native';

export class CustomModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

	render() {
		return (
      <Modal 
          animationType="slide"
          transparent={false}
          visible={this.props.visible}
          presentationStyle = "overFullScreen"
          >
      </Modal>
		)
	}

}

