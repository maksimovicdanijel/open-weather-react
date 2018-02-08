import React, {Component} from 'react';
import {Field, Control, Input, Button, Level} from 'reactbulma';

class EnterLocation extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

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
    
    this.props.onSubmit(this.state.location);
    this.setState({
      location: ''
    });
  }

  render() {
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
