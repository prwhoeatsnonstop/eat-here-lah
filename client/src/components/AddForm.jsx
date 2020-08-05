import React, { useState } from "react";
import AddRestaurant from "./AddRestaurant";
import { Button} from 'semantic-ui-react';

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        <AddRestaurant />
      </div>
    );
  }
  
  class AddForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: false}
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
    
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick} class="ui button">
            {this.state.showWarning ? 'Close Form' : 'Add Restaurants'}
          </button>
        </div>
      );
    }
  }

  export default AddForm;
  
 