import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteDcrComments, editDcrComments } from '../../redux/Actions/DcrActions'
import { Link, withRouter } from 'react-router-dom'
import { fetchUser } from '../../redux/Actions/UserActions'
import renderIf from './util'
import {
  Badge,
  Container,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  ListGroup,
  Row,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Modal
} from 'reactstrap'

class DcrPosts extends Component {

  state ={
    user: '',
    modal: false,
    pic: ''
  }

  aboutUser = e => {
    e.preventDefault()
    this.props.fetchUser(this.state.user, this.props.history)
  }

  handleSubmit = e => {
       e.preventDefault()
      this.props.deleteDcrComments(this.props.dcrComments.id)
    }

  handleAbout = e => {
      e.preventDefault()
      this.props.fetchAbout(this.state)
  }

  toggle = () => {
     this.setState({
      modal: !this.state.modal
     });
    }

  render(){
    console.log('dcr state', this.state)

    return(

    <div>
      <Card className="diamondCard postBody">
        <Form onSubmit={ this.aboutUser }>
          <CardTitle style={{marginTop:".5em", marginLeft:"2em"}} className="postName"> <Button className="profile-button"
            type="submit"
            value={ this.props.dcrComments.name }
            onClick={e => this.setState({user: e.target.value})}
            >{ this.props.dcrComments.name } </Button>
          </CardTitle>
        </Form>


        <CardBody className="cardTxt">
          <Row>
            <Col className="col-md-2">
              <Button className="profile-button" value={this.props.dcrComments.avatar}
              onMouseEnter={e => this.setState({pic: e.target.value})}
              onClick={this.toggle}>
              <CardImg className="CardImg postImg" top width="100%" src={process.env.PUBLIC_URL + this.props.dcrComments.avatar} />
            </Button>
            </Col>
            <Col>


              <CardText style={{marginLeft:"2em"}}> { this.props.dcrComments.comment } </CardText>
            </Col>

            {renderIf(localStorage.user.replace(/"/g,"") === this.props.dcrComments.name || localStorage.admin.length < 5,


              <Button
                className="pull-right"
                style={{maxHeight:"3em"}}
                value={this.props.dcrComments.id}
                onClick={ this.handleSubmit }
                >Delete</Button>

          )}
          </Row>

          <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <img style={{height:"35em", width:"55em"}} src={process.env.PUBLIC_URL + this.state.pic}/>
          </Modal>


            </CardBody>
            <CardFooter className="cardFoot">
              <Badge style={{borderRadius:"50%", marginRight:"1em"}}>
                0
              </Badge>
              Comments
              <Badge style={{borderRadius:"50%", marginRight:"1em", marginLeft:"1em"}}>
                0
              </Badge>
              Likes
              <Badge style={{borderRadius:"50%", marginRight:"1em", marginLeft:"1em"}}>
                0
              </Badge>
              Dislikes
              <Button className="pull-right" style={{marginLeft:"1em"}}>Dislike</Button>
              <Button className="pull-right" style={{marginLeft:"1em"}}>Like</Button>
              <Button className="pull-right">Comment</Button>
            </CardFooter>
          </Card>
    </div>
      )

  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    deleteDcrComments,
    editDcrComments,
    fetchUser
}, dispatch)


export default withRouter(connect(null, mapDispatchToProps)(DcrPosts));
