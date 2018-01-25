import React, {Component} from 'react';
import {Title} from 'reactbulma';

import FullHeightContainer from '../components/FullHeightContainer';
import EnterLocation from '../components/EnterLocation';

class Home extends Component {
  render() {
    return (
      <FullHeightContainer>
        <Title style={{textAlign: 'center'}}>Enter a location</Title>
        <EnterLocation />
      </FullHeightContainer>
    );
  }
}

export default Home;