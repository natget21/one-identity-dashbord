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
import autoBind from 'react-autobind';
import axios from 'axios';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      fname: "",
      mname: '',
      lname: '',
      email: '',
      cname: ''

    };
    autoBind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  addAdmin(event){
    event.preventDefault();
    //alert(this.state.fname);
    const data = {
      fname : this.state.fname,
      mname : this.state.mname,
      lname : this.state.lname,
      email : this.state.email,
      role : "admin",
      password : "12345"
    }
    //alert(data);
    let context = this;
    axios({
      url:'https://one-identity-api.herokuapp.com/users/create',
      method: 'POST',
      headers:{
        'content-Type':'application/json'
      },
      data: data})
      .then(response => {
        alert("user is saved!! password is " + data['password'])
        context.setState({
          fname: "",
          mname: '',
          lname: '',
          email: '',
        });
        //console.log(response.data);
        //cont.props.onUpdate(response.data);
        //$('#response').html('visitor is saved!').removeClass('res').addClass('green');
                        //update table
                        //cont.props.onUpdate(newData);
        //NotificationManager.success('Visitor is saved!!', '', 5000);
      })
      .catch(error => {
        //console.log(error);
        alert(error.response.data.message);
        //console.log(error.response.data);
      });
  }

  resetUser(event){
    event.preventDefault();
    this.setState({
      fname: "",
      mname: '',
      lname: '',
      email: '',
    });
  }

  addToWhitelist(event){
    event.preventDefault();
    const data = {
      name : this.state.cname,
    }
    //alert(data);
    let context = this;
    axios({
      url:'https://one-identity-api.herokuapp.com/whitelist',
      method: 'POST',
      headers:{
        'content-Type':'application/json'
      },
      data: data})
      .then(response => {
        alert("organization added to whitelist!!")
        context.setState({
          cname: "",
        });
        //console.log(response.data);
        //cont.props.onUpdate(response.data);
        //$('#response').html('visitor is saved!').removeClass('res').addClass('green');
                        //update table
                        //cont.props.onUpdate(newData);
        //NotificationManager.success('Visitor is saved!!', '', 5000);
      })
      .catch(error => {
        //console.log(error);
        alert(error.response.data.message);
      });
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
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter First Name" value={this.state.fname} onChange={(e) => this.setState({fname:e.target.value})} />

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 2, offset: 2 }}>
                      <Label htmlFor="text-input">Middle Name</Label>
                    </Col>
                    <Col md="6">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Middle Name" value={this.state.mname} onChange={(e) => this.setState({mname:e.target.value})}/>

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 2, offset: 2 }}>
                      <Label htmlFor="text-input">Last Name</Label>
                    </Col>
                    <Col md="6">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Last Name" value={this.state.lname} onChange={(e) => this.setState({lname:e.target.value})}/>

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 2, offset: 2 }}>
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col md="6">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Email Address" value={this.state.email} onChange={(e) => this.setState({email:e.target.value})}/>

                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <center>
                  <Button onClick={this.addAdmin} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Register</Button>
                  <Button onClick={this.resetUser} type="reset" size="sm" color="danger" style={{ marginLeft: "20px" }}><i className="fa fa-ban"></i> Reset</Button>
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
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Organization Name" value={this.state.cname} onChange={(e) => this.setState({cname:e.target.value})}/>

                    </Col>
                  </FormGroup>
                  {// <FormGroup row>
                  // /  <Col md={{ size: 2, offset: 2 }}>
                      // <Label htmlFor="text-input">Key</Label>
                    // </Col>
                    // <Col md="6">
                      // <Input type="text" id="text-input" name="text-input" placeholder="Key" />

                    // </Col>
                  // </FormGroup>>
                }
                </Form>
              </CardBody>
              <CardFooter>
                <center>
                  <Button onClick={this.addToWhitelist} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Add To Whitlist</Button>
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
