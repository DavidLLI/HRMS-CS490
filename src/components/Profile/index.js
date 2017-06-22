import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { Grid, Row, Col,Image} from 'react-bootstrap';
import { ButtonToolbar,Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
  static displayName = 'Profile';
  
  render() {
    return (
    <Grid>
       <Row>
          <Col xs={4} md={4}>
             <PageHeader>
               Sam Smith
               </PageHeader>
               
           
        </Col>
          <Col xsPush={5} md={4}>
          <ButtonToolbar>
            <Button bsStyle = "primary" bsSize="Default" onClick= {this.handleClickLogout} > Logout</Button>
          </ButtonToolbar>
          </Col>
          <Col xsPush={2} md={4}>
            <Image 
              style={{width: 50, height: 'auto'}}
              src="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" responsive />
          </Col>

      </Row>
      <Row>
        ————————————————————————————————————————————————————————————————————————
      </Row>
        <Row>
          <Col xs={6} md={4}>
            <Image 
              style={{width: 200, height: 'auto'}}
              src="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" responsive />
          </Col>
          <Col xs={6} md={4}>
            <Row>
               CONTACT INFORMATION
            </Row> 
            <Row>
               ------------------------------
            </Row> 
            <Row>
               Email: SamSmith@gmail.com
            </Row> 
            <Row>
               Mobile: +1(519)-729-1034
            </Row> 
            <Row>
              ———————————————————————————————
            </Row> 
            <Row>
               GENERAL INFORMATION
            </Row> 
            <Row>
               ------------------------------
            </Row> 
            <Row>
               Birthday: July,4th 1990
            </Row> 
            <Row>
              Department: Sales
            </Row> 
            <Row>
              Supervisor: Gigi Green
            </Row>
            <Row>
              City: Waterloo
            </Row>

          </Col>
        </Row>
        <Row>
              ————————————————————————————————————————————————————————————————————————
            </Row>
        
        <Row>
            
            </Row>
        <Row>
           <Col xsPush={5} md={4}>
          <ButtonToolbar>
            <Button 
              bsStyle = "primary" 
              bsSize="Default"
              onClick= {this.handleClickEdit} >Edit</Button>
          </ButtonToolbar>
          </Col>
           
        </Row>
      </Grid>
    );

  }

  handleClickEdit(){
    window.location = 'profileE';
  }
    handleClickLogout(){
    window.location = 'login';
  }
}

export default Profile;