import React, {Component} from "react";
import { Container, Col, Form, FormGroup, Label, Input,Button } from 'reactstrap';
import Toast from 'light-toast';

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
        validate:false
    }

    handleSubmit = (e) => {
    e.preventDefault();
    var validate=this.state.validate;
    if(e.target.name == this.state.firstname) {
        this.setState({
            firstNameError:true
        })
        validate=false
    }
    
    if (e.target.name == this.state.lastname) {
        this.setState({
            lastNameError:true
        })
        validate=false
    } 
        if (e.target.name == this.state.email) {
            this.setState({
                emailError:true
            })
            validate=false
        }
            if(e.target.name == this.state.password) {
                this.setState({
                    passwordError:true
                })
                validate=false
            } 
                if(e.target.name == this.state.confirmpassword) {
                    this.setState({
                        confirmPasswordError:true
                    })
                    validate=false
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

        this.setState ({validate: true})

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
        
        <Container>
            <Col  sm="12" md={{ size: 8, offset: 4 }}>
            <h4>SIGN UP BELOW</h4>
            <Form onSubmit={this.handleSubmit}>
                <Col sm={4}>
            <FormGroup>
            <Label>FirstName</Label>
      <Input type="text" name="firstname" placeholder="First Name" value={this.state.firstname}
                    onChange={this.handleInputChange} />
                    <br />
                    {this.state.firstNameError ? <span style={{color: "red"}}>FirstName Cannot Be Empty</span> : null}       
            </FormGroup>
            </Col>
            <Col sm={4}>
            <FormGroup>
            <Label>LastName</Label>
      <Input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname}
                    onChange={this.handleInputChange} />
                    <br />
                    {this.state.lastNameError ? <span style={{color: "red"}}>LastName Cannot Be Empty</span> : null}
            </FormGroup>
            </Col>
            <Col sm={4}>
            <FormGroup>
            <Label>Email</Label>
      <Input type="email" name="email" placeholder="Email ID" value={this.state.email}
                    onChange={this.handleInputChange} />
                    <br />
                    {this.state.emailError ? <span style={{color: "red"}}>Email Cannot be Empty</span> : null}
            </FormGroup>
            </Col>
            <Col sm={4}>
            <FormGroup>
        <Label>Password</Label>
      <Input type="password" name="password" placeholder="PassWord" value={this.state.password}
                    onChange={this.handleInputChange} />
                    <br />
                    {this.state.passwordError ? <span style={{color: "red"}}>Password Cannot Be Empty</span> : null}
                    {this.state.passwordMatch ? <span style={{color: "red"}}>Password MisMatch</span> : null}
        </FormGroup>
            </Col>
        <Col sm={4}>
        <FormGroup>
        <Label>Confirm Passowrd</Label>
      <Input type="password" name="confirmpassword" placeholder="Confirm Password" value={this.state.confirmpassword}
                    onChange={this.handleInputChange}/>
                    <br />
                    {this.state.confirmPasswordError ? <span style={{color: "red"}}>Confirm Password Cannot Be Empty</span> : null}
                    {this.state.confirmpasswordMatch ? <span></span> : null}

        </FormGroup>
        </Col>
        <Col sm="12" md={{ size: 8}}>
      <Button type="submit" color="info" onClick={() => {
      Toast.info('Submit Success', 3000)}}>
            Sign UP
        </Button>
        <Button color="warning" onClick={this.handleReset} >
            Reset
        </Button>
        
        </Col> 
    {!this.state.validate ? <span>{" "}</span>: <span>Submit Success</span>}

        </Form>

        </Col>

     
        </Container>
    )
}
}

export default SignUP;