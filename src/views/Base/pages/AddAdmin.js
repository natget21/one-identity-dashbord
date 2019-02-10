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
       
         {/* <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="disabled-input">Disabled Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="disabled-input" name="disabled-input" placeholder="Disabled" disabled />
                    </Col>
                  </FormGroup> */}
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Card>
              <CardHeader>
                <strong>Register New Account </strong> 
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
                </Form>
              </CardBody>
              <CardFooter>
                <center>
                  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Register</Button>
                  <Button type="reset" size="sm" color="danger" style={{ marginLeft: "20px" }}><i className="fa fa-ban"></i> Reset</Button>
                </center>
              </CardFooter>
            </Card>

          </Col>
        </Row>
        
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Card>
              <CardHeader>
                <strong>Add Company To Whitlist </strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">

                  <FormGroup row>
                    <Col md={{ size: 2, offset: 2 }}>
                      <Label htmlFor="text-input">Company Name</Label>
                    </Col>
                    <Col md="6">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter First Name" />

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 2, offset: 2 }}>
                      <Label htmlFor="text-input">Key</Label>
                    </Col>
                    <Col md="6">
                      <Input type="text" id="text-input" name="text-input" placeholder="Key" />

                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <center>
                  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Add To Whitlist</Button>
                  <Button type="reset" size="sm" color="danger" style={{ marginLeft: "20px" }}><i className="fa fa-ban"></i> Reset</Button>
                </center>
              </CardFooter>
            </Card>

          </Col>
        </Row>
        
        
      </div>
    );
  }
}

export default Forms;
