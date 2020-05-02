import React from "react";
import {Link} from "react-router-dom";
import { Container, Col, Label,Button } from 'reactstrap';


export default class Home extends React.Component {
    handleClick = () => {
        this.props.history.push(`/signin`);
    };
render() {
    return (
        <Container>
            <Label>Go to SignIN</Label>
            <br />
            <Button outline color="success"><Link to="/signin">SIGN-IN</Link></Button>
            <Button outline color="success"><Link to="/signup">SIGN-Up</Link></Button>
          
        </Container>
    ); 
}
    
}