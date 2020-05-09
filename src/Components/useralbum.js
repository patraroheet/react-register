import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { withRouter } from 'react-router';
import axios from 'axios';
import AlbumContent from './albumcontent';
import  {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';
  

  class UserAlbums extends Component {
      constructor(props) {
          super(props);

          this.state = {
              albums: [],
              album_id: [],
              ID: null,
              clicked: true
          } 
      }

      componentDidMount() {
          this.getAlbums();
      }    

      getAlbums = () => {
          axios.get(`https://picsum.photos/v2/list`)
          .then(res => {
              this.setState({albums: res.data})
            //   {this.state.albums.map(index_ID, index) =>
            //       this.setState({ID: index_ID.index})
            //   }
          })
          .catch (err => {
              console.log(err)
          })
      }

      handleInfo = (id) => {
          axios.get(`https://picsum.photos/id/`+ id +`/info`)
          .then(res => {
              this.setState({album_id: res.data})
       
              this.props.history.push({
                  pathname: '/albumcontent',
                  state: {album_id: res.data},
              })
            this.setState({ID: id}) 
          })
      }

    //   updateState = () => {
    //     this.setState({clicked: false})
    //   }


      render() {
        // console.log("clicked Useralbum:",this.props)
        console.log("clicked Useralbum state:",this.state.albums)
          return (
              <>
              <CardColumns>
        {
        this.state.albums.map((Albs, index) =>
        <Card key={index} >
            <CardImg top width="100%" src={Albs.download_url} alt="Card-image" />
            <CardBody>
                <CardTitle>
                {Albs.author}
                </CardTitle>
                <CardSubtitle>
        <small>{Albs.height}x{Albs.width}</small>
                </CardSubtitle>
            </CardBody>

            <CardColumns style={{margin :"0 auto",display:"flex"}}>
                {
                Albs.id === this.props.location.state.ID
                ? <Button  disabled color="none" style={{margin :"0 auto",display:"flex",width:"100%",justifyContent:"center"}}>
                Viewed Info
               </Button>
               :<Button onClick={()=> {
                this.handleInfo(Albs.id);
                // this.updateState();
                }}  color="secondary" style={{margin :"0 auto",display:"flex",width:"100%",justifyContent:"center"}}>
             View Info
          </Button>
            }
                
            
                
            </CardColumns>
            </Card>
        )}
              </CardColumns>
              {/* <AlbumContent /> */}
              </>
          )
      }
  }

  export default withRouter(UserAlbums);