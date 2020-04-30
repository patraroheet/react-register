import React, {Component} from "react"

class SignUP extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleReset = (e) => {
        e.preventDefault();
        this.setState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        });
    };

    handleClick = () => {
        this.props.history.push(`/signin`);
    };

render() {
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
            <div>
            <label>FirstName</label>
      <input type="text" name="firstname" placeholder="First Name" value={this.state.firstname}
                    onChange={this.handleInputChange} />
      </div>
      <br/>
            <div>
            <label>LastName</label>
      <input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname}
                    onChange={this.handleInputChange}/>
      </div>
      <br/>
            <div>
            <label>Email</label>
      <input type="email" name="email" placeholder="Email ID" value={this.state.email}
                    onChange={this.handleInputChange} />
      </div>
      <br/>
            <div>
            <label>Password</label>
      <input type="password" name="password" placeholder="PassWord" value={this.state.password}
                    onChange={this.handleInputChange} />
      </div>
      <br/>
            <div>
            <label>Confirm Passowrd</label>
      <input type="password" name="confirmpassword" placeholder="Confirm Password" value={this.state.confirmpassword}
                    onChange={this.handleInputChange}/>
      </div>
      <br/>
      <button type="submit" color="primary" onClick={this.handleClick}>
            Sign UP
        </button>
        <button color="link" onClick={this.handleReset}>
            Reset
        </button> 
        </form>
        </div>
    )
}
}

export default SignUP;