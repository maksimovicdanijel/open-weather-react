import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import EnterLocationContainer from '../containers/EnterLocationContainer';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  handleLogoClick() {
    this.props.history.push('/');
  }

  render() {
    return (
      <header className="header">
        <h1 className="header--title" style={{cursor: 'pointer'}} onClick={this.handleLogoClick}>Open Weather</h1>
        <div className="header--search-bar">
          <EnterLocationContainer />
        </div>
      </header>
    );
  }
}

export default withRouter(Header);