import React, {Component} from "react"

class SignUP extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        firstNameError:false,
        lastNameError:false,
        emailError:false,
        passwordError:false,
        confirmPasswordError:false,
        passwordMatch:false,
        confirmpasswordMatch:false,
        formerror: true,
        validate:false
    }

    handleSubmit = (e) => {
    e.preventDefault();
    var validate=this.state.validate;
    if(e.target.name == this.state.firstname) {
        this.setState({
            firstNameError:true
        })
        validate=true
    }
    
    if (e.target.name == this.state.lastname) {
        this.setState({
            lastNameError:true
        })
        validate=true
    } 
        if (e.target.name == this.state.email) {
            this.setState({
                emailError:true
            })
            validate=true
        }
            if(e.target.name == this.state.password) {
                this.setState({
                    passwordError:true
                })
                validate=true
            } 
                if(e.target.name == this.state.confirmpassword) {
                    this.setState({
                        confirmPasswordError:true
                    })
                    validate=true
                }
 
        
        if(this.state.password !== this.state.confirmpassword ) {
            this.setState({
                passwordMatch:true
            })
        } else {
            this.setState({
                confirmpasswordMatch:true
            })
        }

        this.setState ({formerror: false,validate: true})
        console.log(this.state)
        console.log(this.state.validate)
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            firstNameError:false,
            lastNameError:false,
            emailError:false,
            passwordError:false,
            confirmPasswordError:false,
            passwordMatch:false,
        confirmpasswordMatch:false
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
                    <br />
                    {this.state.firstNameError ? <span style={{color: "red"}}>FirstName Cannot Be Empty</span> : null}       
      </div>
      <br/>
            <div>
            <label>LastName</label>
      <input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname}
                    onChange={this.handleInputChange} />
                    <br />
                    {this.state.lastNameError ? <span style={{color: "red"}}>LastName Cannot Be Empty</span> : null}
      </div>
      <br/>
            <div>
            <label>Email</label>
      <input type="email" name="email" placeholder="Email ID" value={this.state.email}
                    onChange={this.handleInputChange} />
                    <br />
                    {this.state.emailError ? <span style={{color: "red"}}>Email Cannot be Empty</span> : null}
      </div>
      <br/>
            <div>
            <label>Password</label>
      <input type="password" name="password" placeholder="PassWord" value={this.state.password}
                    onChange={this.handleInputChange} />
                    <br />
                    {this.state.passwordError ? <span style={{color: "red"}}>Password Cannot Be Empty</span> : null}
                    {this.state.passwordMatch ? <span style={{color: "red"}}>Password MisMatch</span> : null}
                    
      </div>
      <br/>
            <div>
            <label>Confirm Passowrd</label>
      <input type="password" name="confirmpassword" placeholder="Confirm Password" value={this.state.confirmpassword}
                    onChange={this.handleInputChange}/>
                    <br />
                    {this.state.confirmPasswordError ? <span style={{color: "red"}}>Confirm Password Cannot Be Empty</span> : null}
                    {this.state.confirmpasswordMatch ? <span></span> : null}
                    
      </div>
      <br/>
      <button type="submit" color="primary">
            Sign UP
        </button>
        <button color="link" onClick={this.handleReset} >
            Reset
        </button> 
        </form>

     {!this.state.validate ? <span>Submit Success</span>: null}
        </div>
    )
}
}

export default SignUP;