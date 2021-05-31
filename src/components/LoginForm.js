import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  inputChange = (e) => this.setState({[e.target.name]: e.target.value})
  submitForm(e){
    if(this.state.username && this.state.password) this.props.onSubmit(this.state.username, this.state.password).bind(this)
  }
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input onChange={this.inputChange} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.inputChange}  id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
