import React, { Component } from "react";

import { Image } from "react-native";

class ImageElement extends Component {
  render() {
    return (
      <Image
        source={this.props.imgsource}
        style={{
          flex: 1,
          width: null,
          alignSelf: "stretch"
        }}
      />
    );
  }
}

export default ImageElement;
