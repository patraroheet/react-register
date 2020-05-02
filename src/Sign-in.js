import React, {Component} from "react";
import { Container, Col, Form, FormGroup, Label, Input,Button,Fade } from 'reactstrap';



export default class SignIN extends Component {
    state={
        userName: "",
        password: "",
        userNameError:false,
        passwordError:false,
        formerror: true,
        
    }

    handleLogin = (e) => {
        e.preventDefault();
        if (e.target.name == this.state.userName) {
            this.setState({userNameError: true})
        } 
            if(e.target.name == this.state.password) {
                this.setState({passwordError: true})
            }
        
        this.setState ({formerror: false})
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
            <Container>
            <Col sm="12" md={{ size: 8, offset: 4 }}>
                <Form  onSubmit={this.handleLogin}>
                    <h4>SIGN IN BELOW</h4>
                    <Col sm={4}>
                    <FormGroup>
                    <Label>Username</Label>
                    <Input
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    placeholder="User Name"
                    />
                    {this.state.userNameError ? <span style={{color: "red"}}>UserName Empty</span> : null}

                    </FormGroup>
                    </Col>  
                    <Col sm={4}>
                    <FormGroup>
                    <Label>Password</Label>
                    <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                    />
                    {this.state.passwordError ? <span style={{color: "red"}}>Password Empty</span> : null}

                    </FormGroup>
                    </Col>
                    <Col  sm="12" md={{ size: 8}}>
                    <Button type="submit" color="info" onClick={this.handleSuccess}>
                        Sign In
                    </Button>
                    <Button color="info" onClick={this.handleClick} type="button">
                        Sign Up
                    </Button>
                    </Col>
                </Form>
                </Col>


         {!this.state.formerror 
                ? <span>SignIN Success</span>: null}
            </Container>
        )
    }
}