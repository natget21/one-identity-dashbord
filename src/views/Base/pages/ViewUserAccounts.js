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
  Table
} from 'reactstrap';

import LModel from "../../../services/api.js";
class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      data:[]
    };
    
  }

  componentDidMount(){
    this.getusers()
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }


  getusers() {
    LModel.find("persons", null, null).then(response => {
      console.log(response.data);
      
      this.setState({ data: response.data });
    });
  }

  render() {


    

    // const data = this.state.data.map(d => {
    //   <tr>
    //     <td>d.fname</td>
    //     <td>d.mname</td>
    //     <td>d.lname</td>
    //   </tr>
        
      
    // });



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
          <Col xs="12" md={{ size: 10, offset: 1 }}>
            <Card>
              <CardHeader>
                <strong>Registered users</strong> 
              </CardHeader>
              <CardBody>
              <Table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Citizenship</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>abel</td>
                    <td>kebede</td>
                    <td>Ethiopian</td>
                  </tr>
                  <tr>
                    <td>selam</td>
                    <td>abebe</td>
                    <td>Ethiopian</td>
                  </tr>
                  <tr>
                    <td>kidus</td>
                    <td>mulgeta</td>
                    <td>Ethiopian</td>
                  </tr>
                    <tr>
                      <td>selam</td>
                      <td>abebe</td>
                      <td>Ethiopian</td>
                    </tr>
                    <tr>
                      <td>kidus</td>
                      <td>mulgeta</td>
                      <td>Ethiopian</td>
                    </tr>
                    <tr>
                      <td>selam</td>
                      <td>abebe</td>
                      <td>Ethiopian</td>
                    </tr>
                    <tr>
                      <td>kidus</td>
                      <td>mulgeta</td>
                      <td>Ethiopian</td>
                    </tr>
                </tbody>
              </Table>
              </CardBody>
            </Card>
            </Col>
          
        </Row>
        
        
        
        
      </div>
    );
  }
}

export default Forms;
