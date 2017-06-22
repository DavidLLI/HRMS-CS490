import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { Grid, Row, Col,Image} from 'react-bootstrap';
import { ButtonToolbar,Button } from 'react-bootstrap';
import { Form, FormGroup,ControlLabel,FormControl,Checkbox} from "react-bootstrap";
class Profile extends Component {
  static displayName = 'ProfileE';
  
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
            <Button bsStyle="primary"  onClick= {this.handleClickLogout}>Logout</Button>
          </ButtonToolbar>
          </Col>
          <Col xsPush={2} md={4}>
            <Image 
              style={{width: 50, height: 'auto'}}
              src="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" responsive />
          </Col>

      </Row>
      <Row>
               CONTACT INFORMATION
      </Row> 
      <Row>
               ------------------------------
      </Row> 
       <Row>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                    Email
                </Col>
                <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalMobile">
                <Col componentClass={ControlLabel} sm={2}>
                    Mobile
                </Col>
                <Col sm={10}>
                    <FormControl type="Mobile" placeholder="Mobile" />
                </Col>
            </FormGroup>
            
            

            </Form>
        </Row>
         <Row>
               GENERAL INFORMATION
      </Row> 
      <Row>
               ------------------------------
      </Row> 
       <Row>
          <Form horizontal>
            <FormGroup controlId="formHorizontalBirthday">
                <Col componentClass={ControlLabel} sm={2}>
                    Birthday
                </Col>
                <Col sm={10}>
                    <FormControl type="birthday" placeholder="Birthday" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalDepartment">
                <Col componentClass={ControlLabel} sm={2}>
                   Department
                </Col>
                <Col sm={10}>
                    <FormControl type="department" placeholder="Department" />
                </Col>
            </FormGroup>
            
             <FormGroup controlId="formHorizontalSupervisor">
                <Col componentClass={ControlLabel} sm={2}>
                   Supervisor
                </Col>
                <Col sm={10}>
                    <FormControl type="supervisor" placeholder="Supervisor" />
                </Col>
            </FormGroup>

             <FormGroup controlId="formHorizontalCity">
                <Col componentClass={ControlLabel} sm={2}>
                   City
                </Col>
                <Col sm={10}>
                    <FormControl type="city" placeholder="City" />
                </Col>
            </FormGroup>

            </Form>
            <Col xsPush={2} md={4}>
            <ButtonToolbar>
                <Button bsStyle="primary" onClick= {this.handleClickSave}>Save</Button>
            </ButtonToolbar>
            </Col>
        </Row>

      </Grid>
    );

  }
   handleClickSave(){
    window.location = 'profile';
  }
  handleClickLogout(){
    window.location = 'login';
  }
}

export default Profile;
