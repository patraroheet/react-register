import React, { Component } from 'react';
import { Container, Col,Row, Button,Card, CardBody, CardTitle,CardSubtitle,Form, Input } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router';


class CustomUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            body: "",
            userId: null,
            success: false
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    postData = (e) => {
        console.log("Button Clicked");
        e.preventDefault()

        const custom = {
            name: this.state.name,
            body: this.state.body,
            userId: this.state.userId,
            
        }

        axios.post(`https://jsonplaceholder.typicode.com/posts`,{custom} )
        .then(res => {
            console.log("Response:", res);
            this.setState({success: true})
            console.log("Post Data Submitted", res.data.custom)
    
       })
        .catch(
            err => {
                console.log(err);
            }
        )
    }

    render() {
       
        
        return (
            <Container fluid>
            <Row>

        <Col md="4" sm="6">
        <Card style={{ width: '18rem' }}>
        <CardBody>
            <Form onSubmit={this.postData}>
            <CardTitle>
                NAME:
                <Input type="text" name="name" onInput={this.handleInputChange}>
                </Input>
            </CardTitle>
            <CardSubtitle>
                USER-ID:
                <Input type="number" name="userId" onInput={this.handleInputChange}>
                </Input>
            </CardSubtitle>
            <CardBody>
                BODY:
                <Input type="textarea" name="body" onInput={this.handleInputChange}>
                </Input>
            </CardBody>

            <Button type="submit" color="secondary">
                POST DATA  
            </Button>

            </Form>
        </CardBody> 
    </Card>
    </Col>           
        </Row>

        {this.state.success ? <p>Submit Success</p>:<p>{""}</p>}

        </Container>

        )
    }
}

export default withRouter(CustomUser);