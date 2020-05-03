import React, {Component} from "react";
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardHeader,Col,Row,Container} from 'reactstrap';
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
                <CardDeck>
                    <CardHeader className="text-center">
                    <CardTitle>{postdata.title}</CardTitle>
        <CardSubtitle>{postdata.body}</CardSubtitle>
                    </CardHeader>
                    <CardBody>
                    <Row>
                {this.state.comment.map(Comment =>
                <Card style={{ width: '18rem' }}  key={Comment.id}>
                    <CardBody>
                        <CardText>
                        {Comment.email} 
                        </CardText>
                        <CardText>
                        {Comment.body}
                    </CardText>
                    </CardBody>         
                </Card>
                     )}
            </Row>  
                    </CardBody>
                 
                </CardDeck>
                
            </Container>    
                
    )
        }
}
