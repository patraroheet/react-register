import React from "react";
import {Link} from "react-router-dom";
import { Container, Label,Button } from 'reactstrap';


export default class Home extends React.Component {
    handleClick = () => {
        this.props.history.push(`/signin`);
    };
render() {
    return (
        <Container className="ui vertical buttons" style={{display:"-webkit-inline-box",width:"15rem"}}>
            <Label>Go to SignIN</Label>
            <br />
            <Button className="small ui teal button"><Link to="/signin">SIGN-IN</Link></Button>
            <Button className="small ui teal button"><Link to="/signup">SIGN-Up</Link></Button>
            <Button className="small ui teal button"><Link to="/users">USERS</Link></Button>
            <Button className="small ui teal button"><Link to="/CustomUser">CUSTOM</Link></Button>
            <Button className="small ui teal button"><Link to="/useralbums">ALBUMS</Link></Button>
        </Container>
    ); 
}
    
}