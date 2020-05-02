import React, {Component} from 'react';
import { hashHistory } from 'react-router';
import { Container,CardDeck,CardColumns, Col,Row, Form, FormGroup, Label, Input,Button,Card, CardBody, CardTitle } from 'reactstrap';

import axios from 'axios';

export default class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [] 
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            this.setState({user: res.data});
        })
    }

    handleInfoClick = (props) => {
        this.props.history.push(`/${this.state.user.id}/userdetail`);
    }

    render() {
        return (
            // <ul>
            //     {this.state.user.map(User => <li key={User.id}>{User.title}</li>)}
            // </ul>
        <Container fluid>
            <Row>
            {this.state.user.map(User => 
            <Col md="4" sm="6" >
                <Card style={{ width: '18rem' }}  key={User.id}>
                <CardBody>
                    <CardTitle>
                        {User.title}
                    </CardTitle>
                    <Button onClick={this.handleInfoClick}>
                        View Info
                    </Button>
                </CardBody>
            </Card>
            </Col>           
                )}
                </Row>
        </Container>
        )
    }
}