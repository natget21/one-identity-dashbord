import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

import { message, Icon, Upload } from 'antd'

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
       
        <div>
          
            <Row className="justify-content-center">
            <Col xs="12" md="6" >
              <Card>
                <CardHeader>
                  <strong>Edit Profile </strong>
                </CardHeader>
                <CardBody>
                <Form action="" method="post" className="form-horizontal">

                  <FormGroup row>
                    <Col md={{ size: 2, offset: 2 }}>
                      <Label htmlFor="text-input">First Name</Label>
                    </Col>
                    <Col md="6">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter First Name" />

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 2, offset: 2 }}>
                      <Label htmlFor="text-input">Middle Name</Label>
                    </Col>
                    <Col md="6">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Middle Name" />

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 2, offset: 2 }}>
                      <Label htmlFor="text-input">Last Name</Label>
                    </Col>
                    <Col md="6">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Last Name" />

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 2, offset: 2 }}>
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col md="6">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Email Address" />

                    </Col>
                  </FormGroup>
                <FormGroup>
                  {/* <Label htmlFor="exampleFile">Profile Picture</Label>
                                        <Input type="file" name="file" onChange={this.handleFileChoose} /> */}
                  <center><Upload
                    beforeUpload={this.beforeUpload}
                    onRemove={this.onRemove}
                    fileList={this.state.fileList}
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                                        </Button>
                  </Upload>
                      </center>
                </FormGroup>
                </Form>
                </CardBody>
                <CardFooter>
                  <center>
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Edit</Button>
                  </center>
              </CardFooter> 
              </Card>
              </Col>
            <Col md="3" >
              <Card>
                <CardBody style={{ height: "435px",paddingTop:"100px",paddingLeft:"40px" }}>
              <img
                src={'../../assets/img/male.png'}
                className="img-avatar" style={{ width: "200px", height: "200px" }} alt="userProfile@bootstrapmaster.com" />
                </CardBody>
              </Card>
            </Col>
            </Row>
          

        </div>
        
      </div>
    );
  }
}

export default Forms;
