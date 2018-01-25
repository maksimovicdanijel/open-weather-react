import React from 'react';
import {Hero, Container} from 'reactbulma';

const FullHeightContainer = props => {
  return (
    <div className="fullheight-container">
      <Hero fullheight>
        <Hero.Body>
          <Container>
            {props.children}
          </Container>
        </Hero.Body>
      </Hero>
    </div>
  );
};

export default FullHeightContainer;