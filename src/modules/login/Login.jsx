import * as React from 'react';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            name: '',
            password: '',
            result: ''
        })
    }
  render() {
    return (
      <div>
        <input type="text" placeholder="name" value={this.state.name} onChange={this.changName.bind(this)}/>
        <input type="text"
        value={this.state.password}
        onChange={this.changePassword.bind(this)}placeholder="password"/>

        <input type="button" value="submit" onClick={this.result.bind(this)}/>

        <div className="result">
            {this.state.result}
        </div>
      </div>
    );
  }

  changName(evt) {
      this.setState({
          name: evt.target.value
      })
  }
  changePassword(evt) {
      this.setState({
          password: evt.target.value
      })
  }

  result() {
      this.setState({
          result: this.state.name + this.state.password
      });
  }


}
