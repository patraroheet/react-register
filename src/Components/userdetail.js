import React, {Component} from "react";
import {Card,  CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardHeader,Row,Container,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, UncontrolledCollapse, Button,} from 'reactstrap';

import axios from 'axios';


export default class Userdetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: [],
            postData:{}
        }
    }

    componentDidMount() {
        const data = this.props.location.state.dataid
        this.setState({postData: data})
        this.fetchComments(data.id);
    }

    fetchComments = (id) => {
        const dataid = this.props.location.state.dataid
        if(dataid) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/` + id + `/comments`)
            .then(res => {
                
                this.setState({comment: res.data})
            })
            .catch(err => {console.log(err)})
        }
    }

    render() {
        const postdata = this.state.postData
        return (
            <Container fluid>
                
                    <ListGroup>
                        <ListGroupItem>
                        <ListGroupItemHeading className="text-center">
                    {postdata.title}
                    </ListGroupItemHeading>
                    <ListGroupItemText>{postdata.body}</ListGroupItemText>
                        </ListGroupItem>
                        <Button color="success" id="toggler" style={{ width: '15rem',margin: "0.5em auto" }}>
                              Show Comments
                               </Button>
                    </ListGroup>

                    
                    <CardDeck>
                    <UncontrolledCollapse toggler="#toggler">
                    <CardBody>
                    <Row>
                {this.state.comment.map(Comment =>
                <Card style={{ width: '18rem' }}  key={Comment.id}>
                    <CardBody>
                        <Button outline color="info" id="email" style={{ width: '10em' }}>
                        {Comment.email} 
                        </Button>
                        <UncontrolledCollapse toggler="#email">
                        <CardText>
                        {Comment.body}
                    </CardText>
                        </UncontrolledCollapse>                        
                    </CardBody>         
                </Card>
                     )}
            </Row>  
                    </CardBody>
                    </UncontrolledCollapse>
                    
                 
                </CardDeck>
                
            </Container>    
                
    )
        }
}
