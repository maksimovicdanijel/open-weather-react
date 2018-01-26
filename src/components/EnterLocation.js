import React, {Component} from 'react';
import {Field, Control, Input, Button, Level} from 'reactbulma';
import {Redirect} from 'react-router-dom';

class EnterLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      submitedLocation: '',
      submited: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      location: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const location = this.state.location;

    this.setState({
      location: '', 
      submited: true,
      submitedLocation: location
    });
  }

  render() {
    if (this.state.submited) {
      return <Redirect to={{
        pathname: '/forecast',
        search: '?location=' + this.state.submitedLocation
      }} />
    }

    return (
      <div className="enter-location">
        <Level>
          <Level.Item>
            <form action="" onSubmit={this.onSubmit}>
                <Field hasAddons>
                  <Control>
                    <Input onChange={this.onChange} 
                          value={this.state.location}
                          placeholder="Enter a location" />
                  </Control>
                  <Control>
                    <Button type="submit">Search</Button>
                  </Control>
                </Field>
              </form>
          </Level.Item>
        </Level>
      </div>
    );
  }
}

export default EnterLocation;
