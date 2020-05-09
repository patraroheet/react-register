import React, {Component} from 'react';
import { withRouter } from 'react-router';
import  {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';



class AlbumContent extends Component {
constructor(props) {
    super(props);
    this.state = {
        albContent: [],
    }
}

componentDidMount() {
    const albData = this.props.location.state.album_id;
    this.setState({albContent: albData})
    
}

handleReturn = (id) => {
    this.props.history.push(
{        pathname: '/useralbums',
        state: {ID: id,clicked : false},
}    );
// console.log(id,"required id")
}
render() {
    const albcontent = this.state.albContent
    return(
        <Card>
            <CardImg top width="100%" src={albcontent.download_url} alt="Card-image" />
            <CardBody>
    <CardTitle>{albcontent.author}</CardTitle>
    <CardSubtitle>
        <small>{albcontent.height}x{albcontent.width}</small>
                </CardSubtitle>
            </CardBody>
            <Button onClick={()=>{
                this.handleReturn(albcontent.id);
                /*this.setState({clicked: this.props.location.state.clicked})*/
                }} style={{margin :"0 auto",display:"flex",justifyContent:"center"}}>
                GoBack
            </Button>
        </Card>
    )
}
}

export default withRouter(AlbumContent);