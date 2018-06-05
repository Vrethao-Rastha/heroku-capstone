import React, { Component } from 'react';
import { connect } from 'react-redux'
import {browserHistory,withRouter} from "react-router-dom"

import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchDcrSingle } from '../../redux/actions'
import ScrollerPic3 from '../Scrollers/ScrollerPic3'
import ScrollerPic23 from '../Scrollers/ScrollerPic23'

import {
  Button,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
  Form
} from 'reactstrap'
import { getRandom } from './util'
import cardPics from '../images/Fallout-4-Concept-Art-23.jpg'


class DiamondTemplate extends Component {
  state = {
    id: '',
  }

  handleDcrSubmit = e => {
    console.log('FIRE!', this.props)
    e.preventDefault()
    this.props.fetchDcrSingle(this.props.dcr[1].id, this.props.history)


  }


  render(){

    console.log('state test', this.props)
  return(
  <div>

    <ScrollerPic3 />

    <div className="phantom"></div>
    <div className="phantom"></div>


    <Col>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em"}} className="text-center">{ this.props.dcr[1].title }</CardTitle>
         <CardImg className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>

              <CardText>{ this.props.dcr[1].body.slice(0,25).concat("...") }</CardText>

                <Button style={{borderRadius:"15px"}}
                  type="submit"
                  value={ this.props.dcr[1].id}

                  onClick={ this.handleDcrSubmit }
                  >Read More</Button>

            </CardBody>

          </Card>
          <div className="phantom"></div>
          <div className="phantom"></div>
          <div className="phantom"></div>
          <ScrollerPic23 />
          <div style={{marginBottom:"6em"}}></div>


  </Col>
  </div>
  )
}
};

const mapDispatchToProps = dispatch =>
 bindActionCreators({
   fetchDcrSingle
 }, dispatch)

const mapStateToProps = state => ({
  dcr: state.dcr
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DiamondTemplate));
