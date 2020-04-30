import React, {Component} from "react";


export default class SignIN extends Component {
    state={
        userName: "",
        password: ""
    }

    handleLogin = (e) => {
        e.preventDefault();
        console.log(this.state.userName);
        console.log(this.state.password);
        console.log(this.state);
    };
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleClick = () => {
        this.props.history.push(`/signup`);
    };


    render() {
        return(
            <div>
                <form  onSubmit={this.handleLogin}>
                    <label>Username</label>
                    <input
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    placeholder="User Name"
                    />
                    <br />
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                    />
                    <div>
                    <button type="submit" color="primary">
                        Sign In
                    </button>
                    <button color="link" onClick={this.handleClick} type="button">
                        Sign Up
                    </button>
                    </div>                  
                </form>
            </div>
        )
    }
}