import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import MainNav from '../Reactstrap/MainNav'
import Footer from '../Reactstrap/Footer'
import PiperStory from './PiperStory'
import {
  Container,
  Col,
  Card,
  CardText,
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
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'






class PipersPage extends Component {

  state = {
    modal: false,

  }

  render(){
    let piperStory = this.props.piperInt.map(item => <PiperStory key={ item.id } piper={ item } />)

    return(
      <div>
        <MainNav/>
        <div className="piperPage"></div>
        <Container className="piperPageComments">

          Summer is failing, and Autumn is upon us. <br/>
          Strange, its been almost a year to the day since The Valkyrie wandered out of an abandoned Vault and set the Commonwealth on fire.<br/>

          Much has changed in a year. So much.<br/>
          The Institute is gone.<br/>
          Let that sink in for a minute.<br/>
          The Institute is Gone. Destroyed.<br/>

          The Railroad, with The Valkyrie at their head, fought the Institute on their own ground. And Won.<br/>

          I know most of my readers are aware of this woman, but I wanted to clear the air as far as who she is, what she represents, and let her tell her story in her own words. <br/>
          What follows is my second interview with her, however she would only agree to speak in the hours after sunset when it was too difficult or dangerous to continue.
          I've included pictures taken by me, or her second in command Heather, from the campsites we made on ruined overpasses, destroyed buildings, and once, on our first night, from a abaondoned car park with the ruins of Boston in the background.
          I hope you find this as enlightening as I did!

          <div className="phantom"></div>
          <div className="piperInterview">
            { piperStory }
          </div>
          <div className="phantom"></div>

        </Container>
        <Col md={{size: 8, offset: 2}} className="piperPageComments">
          And that is the end of this particular interview. At this point Valkyrie was called off to deal with some emergency or other and never returned to the camp.
          I hope you found this interesting, and useful in understanding the Commonwealth's most interesting and misunderstood person!
          <div className="phantom"></div>

          <img style={{height:"40em"}} src={process.env.PUBLIC_URL + "/bridge.jpg"}/>
        </Col>




      <Footer/>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({

  }, dispatch)

  const mapStateToProps = state => ({
    piperInt: state.piper
  })

export default connect(mapStateToProps, mapDispatchToProps)(PipersPage)
