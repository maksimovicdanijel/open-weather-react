import React from 'react';

const withForecast = (data, Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.data = {
        city: data.city.name,
        forecast: data.list
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

