import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onParentSubmit = this.props.onSubmit ? this.props.onSubmit : () => {};
    this.onLocationChange = this.onLocationChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.onParentSubmit(this.state.location);

    this.setState({location: ''});
  }

  onLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }

  render() {
    return (
      <header className="header">
        <h1 className="header--title">Open Weather</h1>
        <div className="header--search-bar">
          <form action="" onSubmit={this.onSubmit}>
            <input type="text" 
                   onChange={this.onLocationChange} 
                   value={this.state.location}
                   placeholder="Enter a location" />
          </form>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  onSubmit: PropTypes.func
};

export default Header;