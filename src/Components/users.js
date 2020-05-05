import React, {Component} from 'react';
import { Container, Col,Row, Button,Card, CardBody, CardTitle } from 'reactstrap';

import axios from 'axios';
import { withRouter } from 'react-router';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            dataid: null 
        }
    }

    componentDidMount() {
        
        this.fetchData();   
    }

    fetchData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            console.log("Response:", res)
            this.setState({user: res.data});  
        })
        .catch(
            err => {
                console.log(err);
            }
        )
    }

    handleInfoClick = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/` + id)
        .then(res => {
            this.setState({dataid: id})
            this.props.history.push({
                pathname: '/userdetails',
                state: {dataid: res.data}
            }   
            );       
        })
        .catch(
            err =>{console.error(err)}
        ) 
    }   
    

    render() {  
        return (
        <Container fluid>
            <Row>
            {this.state.user.map(User => 
            <Col md="4" sm="6" >
                <Card style={{ width: '18rem' }}  key={User.id}>
                <CardBody>
                    <CardTitle>
                        {User.title}
                    </CardTitle>
                    <Button onClick={()=>this.handleInfoClick(User.id)}>
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

export default withRouter(Users);