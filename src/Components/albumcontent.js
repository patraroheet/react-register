import React, {Component} from 'react';
import { withRouter } from 'react-router';
import  {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';
import { connect } from 'react-redux';
import {handleReturn} from '../store/Actions/albumcontent_action';
import axios from 'axios';

 

class AlbumContent extends Component {
constructor(props) {
    super(props);
    // this.state = {
    //     albContent: []
    // }
}

componentDidMount() {
    console.log("from albumcontent did mount",this.props)
    this.getPhoto();
}

getPhoto =()=> {
    axios.get(`http://placekitten.com/200/300`)
    .then(res => {
        console.log("Photos:",res)
    })
}

render() {
    console.log("from albumcontent render",this.props)
    const albcontent = this.props.album_id
    return(
        <Card style={{width:"55em"}}>
            <CardImg top width="100%" src={albcontent.download_url} alt="Card-image" />
            <CardBody>
    <CardTitle>{albcontent.author}</CardTitle>
    <CardSubtitle>
        <small>{albcontent.height}x{albcontent.width}</small>
                </CardSubtitle>
            </CardBody>
            <Button onClick={()=>{
                this.props.handleReturn(albcontent.id)
                this.props.history.push('/useralbums')
                }} style={{margin :"0 auto",display:"flex",justifyContent:"center"}}>
                GoBack
            </Button>
        </Card>
    )
}
}

function mapStateToProps(state) {
    const albumcontentstate = state.useralbum_reducer;
    return albumcontentstate;
  }
  const mapDispatchToProps = () => ({
    handleReturn: handleReturn
  })
  
  //export default connect(mapStateToProps,mapActionToProps())(UserPosts)

export default connect(mapStateToProps,mapDispatchToProps())(withRouter(AlbumContent))