import React, {Component} from 'react';
import { withRouter } from 'react-router';
import  {
    Card, Button, CardImg, CardTitle, CardGroup, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';
  import { connect } from 'react-redux';
  import  {getAlbums}  from '../store/Actions/useralbum_action';
  import  {handleInfo}  from '../store/Actions/useralbum_action';
  import store from '../store/store_index';


  class UserAlbums extends Component {
      constructor(props) {
          super(props);

          // this.state = {
          //     albums: [],
          //     album_id: [],
          //     ID: null,
          //     clicked: true
          // } 
      }

      componentDidMount() {
        this.props.getAlbums()
          console.log("DiD Mount",this.props)  
      }    

      componentWillReceiveProps(Props){
        console.log("Will receive Props",Props)
      }


      render() {
        // console.log("State From store:",this.props)
        const store_albums = store.getState().useralbum_reducer.albums
        const albumID = store.getState().albumcontent_reducer.ID
          return (
              <>
              <CardColumns>
        {
        store_albums.map((Albs, index) =>
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
                
               {Albs.id === albumID
               ?  <Button  disabled color="none" style={{margin :"0 auto",display:"flex",width:"100%",justifyContent:"center"}}>
               Viewed Info
              </Button>
              : <Button onClick={()=> {
                this.props.handleInfo(Albs.id);
                this.props.history.push('/albumcontent')
                }}  color="secondary" style={{margin :"0 auto",display:"flex",width:"100%",justifyContent:"center"}}>
             View Info
          </Button>
               }
            </CardColumns>
            </Card>
        )}
              </CardColumns>
              </>
          )
      }
  }
  function mapStateToProps(state) {
    return{
      state
      // userAlbums:state.useralbum_reducer
      // albumContentID:state.albumcontent_reducer
    }
  }
  const mapDispatchToProps = () => ({
    getAlbums: getAlbums,
    handleInfo: handleInfo
  })

export default connect(mapStateToProps,mapDispatchToProps())(withRouter(UserAlbums));
