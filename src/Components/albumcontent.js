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
        albContent: []  
    }
}

componentDidMount() {
    const albData = this.props.location.state.album_id;
    this.setState({albContent: albData})
    console.log(this.state.albContent);
}

goBack = (id) => {
    this.props.history.push(
{        pathname: '/useralbums',
        state: {ID: id,clicked : false}
}    );
// console.log(id,"required id")
}
render() {
    // console.log(this.props.history.location)
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
            <Button onClick={()=>this.goBack(albcontent.id)} style={{margin :"0 auto",display:"flex",justifyContent:"center"}}>
                GoBack
            </Button>
        </Card>
    )
}
}

export default withRouter(AlbumContent);