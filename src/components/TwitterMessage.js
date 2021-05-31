import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ""};
  }
  inputChange = (e) => this.setState({message: e.target.value})
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.inputChange} type="text" name="message" id="message" value={this.state.message}/>
        <em>{this.props.maxChars - this.state.message.length}</em>
      </div>
    );
  }
}

export default TwitterMessage;
