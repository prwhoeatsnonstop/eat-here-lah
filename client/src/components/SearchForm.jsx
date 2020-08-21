import React, { useState } from "react";
import HawkerFare from "./HawkerFare";
import { Button} from 'semantic-ui-react';

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        <HawkerFare />
      </div>
    );
  }
  
  class SearchForm extends React.Component {
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
            {this.state.showWarning ? 'Close me for a leaner look :)' : 'Open me up to find a random hawker in Singapore'}
          </button>
        </div>
      );
    }
  }

  export default SearchForm;
  
 