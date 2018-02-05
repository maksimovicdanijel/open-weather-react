import React, {Component} from 'react';
import {Title} from 'reactbulma';

import FullHeightContainer from '../components/FullHeightContainer';
import EnterLocationContainer from '../containers/EnterLocationContainer';

class Home extends Component {
  render() {
    return (
      <FullHeightContainer>
        <Title style={{textAlign: 'center'}}>Enter a location</Title>
        <EnterLocationContainer />
      </FullHeightContainer>
    );
  }
}

export default Home;