import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { Grid, Row, Col,Image} from 'react-bootstrap';
import { ButtonToolbar,Button } from 'react-bootstrap';
import { Form, FormGroup,ControlLabel,FormControl,Checkbox, DropdownButton, MenuItem } from "react-bootstrap";
import { observer } from 'mobx-react';
import UserStore from '@stores/User.store';

@observer class Profile extends Component {
  static displayName = 'ProfileE';

  constructor(props) {
    super(props);

    this.state = {
      department: UserStore.department
    }

    this.deptDropdown = {
      1: 'Production',
      2: 'Marketing',
      3: 'Finance',
      4: 'HR'
    };

    this.onDeptChange = this.onDeptChange.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  onDeptChange(event) {
    this.setState({department: this.deptDropdown[event]});
  }

  handleClickSave() {
    const obj = {department: this.state.department};
    UserStore.updateProfile(obj);
  }
  
  render() {
    return (
    <Grid>
       <Row>
          <Col xs={4} md={4}>
             <PageHeader>
               Sam Smith
               </PageHeader>
               
           
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
                    <DropdownButton bsStyle='Default' title={this.state.department} onSelect={this.onDeptChange} >
                      <MenuItem eventKey='1'>{this.deptDropdown[1]}</MenuItem>
                      <MenuItem eventKey='2'>{this.deptDropdown[2]}</MenuItem>
                      <MenuItem eventKey='3'>{this.deptDropdown[3]}</MenuItem>
                      <MenuItem eventKey='4'>{this.deptDropdown[4]}</MenuItem>
                    </DropdownButton>
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
               ADDITIONAL INFORMATION
      </Row> 
      <Row>
               ------------------------------
      </Row> 
       <Row>
          <Form horizontal>
            <FormGroup controlId="formHorizontalSKILLS">
                <Col componentClass={ControlLabel} sm={2}>
                    Skills
                </Col>
                <Col sm={10}>
                    <FormControl type="skills" placeholder="Skills" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalInterests">
                <Col componentClass={ControlLabel} sm={2}>
                   Interests
                </Col>
                <Col sm={10}>
                    <FormControl type="interests" placeholder="Interests" />
                </Col>
            </FormGroup>

            </Form>
          </Row>
          <Row>
            <Col xsPush={2} md={4}>
            <ButtonToolbar>
                <Button bsStyle="primary" onClick= {this.handleClickSave}>Save</Button>
            </ButtonToolbar>
            </Col>
        </Row>

      </Grid>
    );

  }
}

export default Profile;
