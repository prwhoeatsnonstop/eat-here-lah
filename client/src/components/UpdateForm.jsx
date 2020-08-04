import React, { useState } from "react";
import UpdateRestaurant from "./UpdateRestaurant";


function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        <UpdateRestaurant />
      </div>
    );
  }
  
  class UpdateForm extends React.Component {
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
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Close Form' : 'Update Restaurants'}
          </button>
        </div>
      );
    }
  }

  export default UpdateForm;
  
 