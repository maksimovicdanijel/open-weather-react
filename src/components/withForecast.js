import React from 'react';

const withForecast = (data, Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      console.log(data);

      this.data = {
        
      };
    }

    render() {
      return (
        <Component {...this.data} {...this.props}>{this.props.children}</Component>
      );
    }
  }
}

export default withForecast;

