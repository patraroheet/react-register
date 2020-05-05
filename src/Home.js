import React from "react";
import {Link} from "react-router-dom";
import { Container, Label,Button } from 'reactstrap';


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
            <Button outline color="success"><Link to="/users">USERS</Link></Button>
            <Button outline color="success"><Link to="/CustomUser">CUSTOM</Link></Button>
          
        </Container>
    ); 
}
    
}