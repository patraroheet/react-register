import React, { Component } from 'react';
import { Container, Col,Row, Button,Card, CardBody, CardTitle,CardSubtitle } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router';


class CustomUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newuser: []
        }
    }

    componentDidMount() {
        
    }

    postData = () => {
        console.log("Button Clicked");
        axios.post(`https://jsonplaceholder.typicode.com/posts`,
        {  
            name: 'My Custom User Title',
            body: 'This is a custom body defined by the post method from an API',
            userId: 1
    }
        )
        .then(res => {
            console.log("Response:", res.data);
            
            this.setState({newuser: res.data});
        })
        .catch(
            err => {
                console.log(err);
            }
        )
    }

    render() {
        console.log(this.state.newuser);
        
        return (
            <Container fluid>
            <Row>
            
                            <Col md="4" sm="6">
                            <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle>
                                    {this.state.newuser.name}
                                </CardTitle>
                                <CardSubtitle>
                                    {this.state.newuser.body}
                                </CardSubtitle>
                            </CardBody> 
                        </Card>
                        </Col>           
            
            
              
                </Row>
                <Button onClick={()=>this.postData()}>
                        View Info  
                    </Button>
        </Container>
        )
    }
}

export default withRouter(CustomUser);