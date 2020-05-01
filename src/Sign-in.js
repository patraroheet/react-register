import React, {Component} from "react";


export default class SignIN extends Component {
    state={
        userName: "",
        password: "",
        userNameError:false,
        passwordError:false,
        formerror: true
    }

    handleLogin = (e) => {
        e.preventDefault();
        if (e.target.name == this.state.userName) {
            this.setState({userNameError: true})
        } else {
            if(e.target.name == this.state.password) {
                this.setState({passwordError: true})
            }
        }
        this.setState ({formerror: false})
        console.log(this.state.userName);
        console.log(this.state.password);
        console.log(this.state);
    };
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            userNameError:false,
            passwordError:false
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
                    {this.state.userNameError ? <span>UserName Empty</span> : null}
                    <br />
                    <label>Password</label>
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                    />
                    {this.state.passwordError ? <span>Password Empty</span> : null}
                    <br />
                    <div>
                    <button type="submit" color="primary">
                        Sign In
                    </button>
                    <button color="link" onClick={this.handleClick} type="button">
                        Sign Up
                    </button>
                    </div>                  
                </form>

                {!this.state.formerror ? <span>SignIN Success</span>: null}
            </div>
        )
    }
}